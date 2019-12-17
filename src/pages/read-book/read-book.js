import React, {useContext, useEffect, useState} from 'react';
import { useParams } from "react-router";
import Context from '../../store/context';
import Axios from 'axios';
import { url } from '../../api.conf';
import FragmentList from '../../components/fragment-list/fragment-list';
import './read-book.css';

const ReadBook = () => {

    const { actions, state } = useContext(Context);
    const [get, setGet] = useState(false);
    const [count, setCount] = useState(0);
    const {storyId} = useParams();

    useEffect(() => {
        if(!get) {
            if(!(state.fragments[storyId] && state.fragments[storyId].content.length)) {
                Axios.get(`${url}/fragments/${storyId}`)
                .then(({data}) => {
                    setGet(true);
                    actions({type: 'fragment', payload: data, command: {storyId}})

                    Axios.get(`${url}/fragments/count/${storyId}`)
                        .then( ({data}) => {
                            setCount(data.count);
                        })
                        .catch( err => {
                            console.log(err);
                        });

                })
                .catch( err => {
                    console.log(err)
                })
            }
        }
    },[get, actions, storyId, state.fragments, count]);

    return (
        <section className="read-book-wrapper">
            <div className="read-book-inner-wrapper">
                <FragmentList storyId={storyId} count={count}/>
            </div>
        </section>
    )

}

export default ReadBook;