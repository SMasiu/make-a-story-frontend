import React, { useState } from 'react';
import Button from '../../components/button/button';
import './add-new-fragment.css';
import Axios from 'axios';
import { url } from '../../api.conf';
import {useParams, useHistory} from 'react-router-dom';

const AddNewFragment = () => {


    const histary = useHistory();
    const [content, setContent] = useState('');
    const {storyId} = useParams();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        Axios.post(`${url}/news`, {content, storyId}, {withCredentials: true})
            .then( () => {
                histary.push(`/news/${storyId}`);
            })
            .catch( err => {
                console.log(err);
            });

    }

    return (
        <section className="new-fragment-wrapper">
            <div className="new-fragment-inner-wrapper">
                <form onSubmit={handleSubmit}>

                    <h1>Add new fragment</h1>

                    <textarea className="inp-secondary" rows="20" placeholder="Content" 
                    onChange={(e) => setContent(e.target.value)}/>
                    
                    <div className="new-fragment-footer">
                        <Button submit>Add</Button>
                    </div>

                </form>
            </div>
        </section>
    )
}

export default AddNewFragment;