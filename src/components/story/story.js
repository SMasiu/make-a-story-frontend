import React from 'react';
import './story.css';
import { url } from '../../api.conf';
import Box from '../box/box';
import Button from '../button/button';
import {Link} from 'react-router-dom';

const Story = ({ story, number }) => {

    const position = `story-${number % 2 ? 'right' : 'left'}`;
    let count = '';
    switch(number % 3) {
        case 0: {count = 'story-first'; break;}
        case 1: {count = 'story-second'; break;}
        default: {count = 'story-third'; break;}
    }

    return (
        <article className={`story-wrapper ${position} ${count}`}>
            <section className="story-description">
                <div>
                    <h1 className="story-header">{story.title}</h1>
                    <p>{story.description}</p>
                </div>
                <footer>
                    <div className="btn-group">
                        <Link to={`/news/${story.id}`}>
                            <Button>News</Button>
                        </Link>
                        <Link to={`/read-book/${story.id}`}>
                            <Button>Read</Button>
                        </Link>
                    </div>
                </footer>
            </section>
            <section className="story-cover">
                <figure>
                    <Box>
                        <img src={`${url}/covers/${story['cover_path']}`} alt={`${story.title} cover`} />
                    </Box>
                </figure>
            </section>
        </article>
    )
}

export default Story;