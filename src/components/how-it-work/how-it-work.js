import React from 'react';
import './how-it-work.css';
import Box from '../box/box';
import Button from '../button/button';

const HowItWork = () => (
    <div className="hit-container">
        <h1>How it works</h1>
        <section className="hit-wrapper">

            <section className="tile-text">
                <h2>Read the story</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Natus, excepturi aut error nemo eveniet expedita dolorum,
                    quod culpa explicabo rem quasi vitae corporis ut debitis,
                    tempora distinctio. Explicabo corrupti doloribus,
                    cupiditate exercitationem voluptatum quod
                    quod culpa explicabo rem quasi vitae corporis ut debitis,
                    tempora distinctio. Explicabo corrupti doloribus,
                    cupiditate exercitationem voluptatum quod
                </p>
            </section>
            <section className="tile-bg-1 tile">
                <div className="tile-img-wrapper">
                    <Box>
                        <div className="tile-image">
                            <img src="welcome.jpg" alt="tile-img"/>
                        </div>
                    </Box>
                </div>
                <div className="tile-1-btn-wrapper">
                    <Button>Read the story</Button>
                </div>
            </section>

            <section className="tile-bg-2 tile">
            <div className="tile-img-wrapper">
                <Box>
                    <div className="tile-image">
                        <img src="welcome.jpg" alt="tile-img"/>
                    </div>
                </Box>
            </div>
            <div className="tile-1-btn-wrapper">
                    <Button secondary>Add the fragment</Button>
                </div>
            </section>
            <section className="tile-text">
                <h2>Add new fragment</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Natus, excepturi aut error nemo eveniet expedita dolorum,
                    quod culpa explicabo rem quasi vitae corporis ut debitis,
                    tempora distinctio. Explicabo corrupti doloribus,
                    cupiditate exercitationem voluptatum quod
                    quod culpa explicabo rem quasi vitae corporis ut debitis,
                    tempora distinctio. Explicabo corrupti doloribus,
                    cupiditate exercitationem voluptatum quod
                </p>
            </section>
            
            <section className="tile-text">
                <h2>Vote for the best fragment</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Natus, excepturi aut error nemo eveniet expedita dolorum,
                    quod culpa explicabo rem quasi vitae corporis ut debitis,
                    tempora distinctio. Explicabo corrupti doloribus,
                    cupiditate exercitationem voluptatum quod
                    quod culpa explicabo rem quasi vitae corporis ut debitis,
                    tempora distinctio. Explicabo corrupti doloribus,
                    cupiditate exercitationem voluptatum quod
                </p>
            </section>
            <section className="tile-bg-3 tile">
                <div className="tile-img-wrapper-top">
                    <Box>
                        <div>
                            <img src="welcome.jpg" alt="tile-img"/>
                        </div>
                    </Box>
                </div>
                <div className="tile-btn-wrapper">
                    <Button>Get the book</Button>
                </div>
            </section>

        </section>
    </div>
)

export default HowItWork;