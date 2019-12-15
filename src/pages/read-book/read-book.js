import React, {useContext, useEffect, useState} from 'react';
import { useParams } from "react-router";
import Context from '../../store/context';
import Axios from 'axios';
import { url } from '../../api.conf';
import FragmentList from '../../components/fragment-list/fragment-list';

const ReadBook = () => {

    const { actions } = useContext(Context);
    const [get, setGet] = useState(false);
    const {storyId} = useParams();

    useEffect(() => {
        if(!get) {
            Axios.get(`${url}/fragments/${storyId}`)
                .then(({data}) => {
                    setGet(true);
                    actions({type: 'fragment', payload: data, command: {storyId}})
                })
                .catch( err => {
                    console.log(err)
                })
        }
    },[get, actions, storyId]);

    return (
        <section>
            <FragmentList storyId="1"/>
        </section>
    )

}

export default ReadBook;