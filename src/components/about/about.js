import React from 'react';
import './about.css';
import Box from '../box/box';
import Button from '../button/button';

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
                            <img src="about.jpeg" alt="about"/>
                        </Box>
                    </div>
                </section>
                <article className="about-us-article">
                    <div>
                        <h3>Our</h3>
                        <h3>story</h3>
                        <p className="about-paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            At nihil, possimus vel consequuntur natus dolorem sit qui
                            iure ut quis laborum accusantium ipsa nisi consequatur
                            cumque alias quas delectus quae corporis est? Harum
                            delectus aperiam, quod culpa dolorum iure, autem velit
                            odit, nisi quia veritatis voluptatum! Obcaecati officia
                        </p>
                        <p className="about-paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            At nihil, possimus vel consequuntur natus dolorem sit qui
                            iure ut quis laborum accusantium ipsa nisi consequatur
                            cumque alias quas delectus quae corporis est? Harum
                            delectus aperiam, quod culpa dolorum iure, autem velit
                            odit, nisi quia veritatis voluptatum! Obcaecati officia
                        </p>
                        <div className="about-button-wrapper">
                            <Button>Join us</Button>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </section>
)

export default About;