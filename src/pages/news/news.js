import React, {useContext, useEffect, useState} from 'react';
import Button from '../../components/button/button';
import {Link, useParams} from 'react-router-dom';
import './news.css';
import Context from '../../store/context';
import Axios from 'axios';
import { url } from '../../api.conf';
import Fragment from '../../components/fragment/fragment';

const News = () => {

    const {actions, state} = useContext(Context);
    const { storyId } = useParams();
    const [count, setCount] = useState(0);
    const [get, setGet] = useState(false);
    const [page, setPage] = useState(1);
    const [dowPages, setDowPages] = useState([1]);

    useEffect(() => {
        if(!get) {
            setGet(true);
            const queries = [
                Axios.get(`${url}/news/${storyId}`),
                Axios.get(`${url}/news/count/${storyId}`)
            ];

            Promise.all(queries)
                .then( (response) => {
                    const {count} = response[1].data;
                    setCount(count);
                    const {data} = response[0];
                    actions({type: 'newFragment', payload: data, command: {storyId}});
                })
                .catch( err => {
                    console.log(err)
                })
        }
    }, [count, actions, storyId, get])

    const fr = state.newFragments[storyId];
    const frOnPage = 10;
    let max = Math.ceil(parseInt(count) / frOnPage);

    const handlePrevious = () => {
        if(page > 1) {
            setPage(page - 1);
            window.scrollTo(0, 0);
        }
    }

    const handleNext = () => {
        if(page < max) {
            if(dowPages.findIndex( f => f === page + 1 ) === -1) {
                Axios.get(`${url}/fragments/${storyId}?offset=${page * frOnPage}`)
                    .then( ({data}) => {
                        setDowPages([...dowPages, page + 1]);
                        actions({type: 'newFragment', payload: data, command: { storyId }});
                    }) 
                    .catch( err => {
                        console.log(err);
                    });
            }
            setPage(page + 1);
            window.scrollTo(0, 0)
        }
    }

    const filterFragments = () => {
        let offset = (page - 1) * frOnPage;
        return fr ? fr.content
            .filter( (f, i) => !(i < offset || i > offset + frOnPage - 1) )
            .map( (f, i) => <Fragment key={i} fragment={f} /> ) : <></>
    }

    return (
        <div className="news-outer-wrapper">
            <section className="news-wrapper">
                <header className="news-header">
                    <Link to="/stories">
                        <p>Back</p>
                    </Link>
                    <Link to={`/add-new-fragment/${storyId}`}>
                        <Button>Add new fragment</Button>
                    </Link>
                </header>
                {!state.newFragments[storyId] ? 

                    <div className="news-empty">

                    <h1>There is no news for this story yet</h1>

                    </div> 
                    
                    : 
                    
                    <section>
                        {filterFragments()}
                    </section>}

                <footer className="news-footer">
                    <div onClick={handlePrevious}>
                        <Button>Previous</Button>
                    </div>
                    <p>{page}</p>
                    <div onClick={handleNext}>
                        <Button>Next</Button>
                    </div>
                </footer>

            </section>
        </div>
    )
}

export default News;