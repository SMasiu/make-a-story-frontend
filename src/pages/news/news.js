import React, {useContext, useEffect, useState} from 'react';
import Button from '../../components/button/button';
import {Link, useParams} from 'react-router-dom';
import './news.css';
import Context from '../../store/context';
import Axios from 'axios';
import { url } from '../../api.conf';
import NewsList from '../../components/news-list/news-list';

const News = () => {

    const {actions, state} = useContext(Context);
    const { storyId } = useParams();
    const [count, setCount] = useState(0);
    const [get, setGet] = useState(false);
    const [page, setPage] = useState(1);

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

    return (
        <div className="news-outer-wrapper">
            <section className="news-wrapper">
                <header className="news-header">
                    <Link to={`/add-new-fragment/${storyId}`}>
                        <Button>Add new fragment</Button>
                    </Link>
                </header>
                {!state.newFragments[storyId] ? 

                    <div className="news-empty">

                    <h1>There is no news for this story yet</h1>

                    </div> 
                    
                    : 
                    
                    <NewsList storyId={storyId}></NewsList>}

                <footer className="news-footer">
                    <Button>Previous</Button>
                    <p>{page}</p>
                    <Button>Next</Button>
                </footer>

            </section>
        </div>
    )
}

export default News;