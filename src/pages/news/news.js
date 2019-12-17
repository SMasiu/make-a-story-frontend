import React from 'react';
import Button from '../../components/button/button';
import {Link, useParams} from 'react-router-dom';
import './news.css';

const News = () => {

    const { storyId } = useParams();

    return (
        <div className="news-outer-wrapper">
            <section className="news-wrapper">
                <header className="news-header">
                    <Link to={`/add-new-fragment/${storyId}`}>
                        <Button>Add new fragment</Button>
                    </Link>
                </header>
                <div className="news-empty">

                    <h1>There is no news for this story yet</h1>

                </div>
            </section>
        </div>
    )
}

export default News;