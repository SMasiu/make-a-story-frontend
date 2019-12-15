import React, {useEffect, useContext, useState} from 'react';

import Context from '../../store/context';
import StoriesList from '../../components/stories-list/stories-list';
import Axios from 'axios';
import { url } from '../../api.conf';

const Stories = () => {

    const {actions} = useContext(Context);
    const [get, setGet] = useState(false);

    useEffect(() => {
        if(!get) {
        Axios.get(`${url}/stories`) 
            .then(({data}) => {
                setGet(true);
                console.log('settting...')
                return actions({type: 'story', payload: data});
            })
            .catch( err => {
                console.log(err)
            });
        }
    },[actions, get]);

    return (
        <div>
            <StoriesList />
        </div>
    )
}

export default Stories;