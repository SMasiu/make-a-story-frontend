import React, {useEffect, useContext, useState} from 'react';

import Context from '../../store/context';
import StoriesList from '../../components/stories-list/stories-list';
import Axios from 'axios';
import { url } from '../../api.conf';

const Stories = () => {

    const {actions, state} = useContext(Context);
    const [get, setGet] = useState(false);

    useEffect(() => {
        if(!get && !state.stories.length) {
        Axios.get(`${url}/stories`) 
            .then(({data}) => {
                setGet(true);
                return actions({type: 'story', payload: data});
            })
            .catch( err => {
                console.log(err)
            });
        }
    },[actions, get, state.stories]);

    return (
        <div>
            <StoriesList />
        </div>
    )
}

export default Stories;