import React, {useContext, useState} from 'react';
import Context from '../../store/context';
import Fragment from '../fragment/fragment';
import './fragment-list.css';
import Button from '../button/button';
import Axios from 'axios';
import { url } from '../../api.conf';

const FragmentList = ({storyId, count}) => {

    const [curent, setCurent] = useState(1);
    const {state, actions} = useContext(Context);
    const [dowPages, setDowPages] = useState([1]);

    const frOnPage = 10;
    let max = Math.ceil(parseInt(count) / frOnPage);
    let stories = state.stories.filter( s => s.id === parseInt(storyId) );
    let title = '';

    const fr = state.fragments[storyId];

    if(stories.length) {
        title = stories[0].title;
    }

    const handlePrevious = () => {
        if(curent > 1) {
            setCurent(curent - 1);
        }
    }

    const handleNext = () => {
        if(curent < max) {
            if(fr && dowPages.findIndex( f => f === curent + 1) === -1) {                
                Axios.get(`${url}/fragments/${storyId}?offset=${curent * frOnPage}`)
                    .then( ({data}) => {
                        setDowPages([...dowPages, curent + 1]);
                        actions({type: 'fragment', payload: data, command: { storyId }});
                    }) 
                    .catch( err => {
                        console.log(err);
                    });
            }
            setCurent(curent + 1);
        }
    }

    const filterFragments = () => {
        let offset = (curent - 1) * frOnPage;
        return fr ? fr.content
            .filter( (f, i) => !(i < offset || i > offset + frOnPage - 1) )
            .map( (f, i) => <Fragment key={i} fragment={f} /> ) : <></>
    }

    return (
        <section className="fragment-list-wrapper">
            <h1>{title}</h1>
            {filterFragments()}
            <footer className="fragment-list-footer">
                <div onClick={handlePrevious}>
                    <Button>Previous</Button>
                </div>
                <p>{curent}</p>
                <div onClick={handleNext}>
                    <Button>Next</Button>
                </div>
            </footer>
        </section>
    )
}

export default FragmentList;