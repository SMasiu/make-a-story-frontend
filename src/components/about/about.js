import React from 'react';
import './about.css';
import Box from '../box/box';

const About = () => (
    <section className="about-wrapper">
        <div className="about-stage-1">
            <div className="stage-content">
                <section className="stage-images-box">
                    <div className="stain-wrapper">
                        <img src="stain2.png" alt="stain"/>
                    </div>
                    <div className="about-img-wrapper">
                        <Box>
                            <img src="welcome.jpg" alt="about"/>
                        </Box>
                    </div>
                </section>
                <article>
                    Our story
                </article>
            </div>
        </div>
    </section>
)

export default About;