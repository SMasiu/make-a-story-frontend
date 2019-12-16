import React, {useContext, useEffect, useState} from 'react';
import { useParams } from "react-router";
import Context from '../../store/context';
import Axios from 'axios';
import { url } from '../../api.conf';
import FragmentList from '../../components/fragment-list/fragment-list';

const ReadBook = () => {

    const { actions, state } = useContext(Context);
    const [get, setGet] = useState(false);
    const {storyId} = useParams();
    
    useEffect(() => {
        if(!get) {
            if(!(state.fragments[storyId] && state.fragments[storyId].content.length)) {
                Axios.get(`${url}/fragments/${storyId}`)
                .then(({data}) => {
                    setGet(true);
                    actions({type: 'fragment', payload: data, command: {storyId}})
                })
                .catch( err => {
                    console.log(err)
                })
            }
        }
    },[get, actions, storyId, state.fragments]);

    return (
        <section>
            <FragmentList storyId="1"/>
        </section>
    )

}

export default ReadBook;