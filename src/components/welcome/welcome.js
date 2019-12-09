import React from 'react';
import './welcome.css';

import Box from '../box/box';
import Arrow from '../arrow/arrow';

const Welcome = () => (
    <section className="welcome-box">
        <div className="content-stage-1">
            <footer className="stage-footer">
                <img src="stain1.png" alt="stain" />
            </footer>
            <div className="content-stage-2">
                <Box>
                    <img src="welcome.jpg" alt="wecome" />
                </Box>
            </div>
            <div className="s3-wrapper">
                <Box>
                    <div className="content-stage-3">
                        <div>
                            <p className="heading-1 heading">we change</p>
                            <p className="heading-1 heading">the story</p>
                            <p className="heading-2 heading">be</p>
                            <p className="heading-2 heading">one of us</p>
                        </div>
                        <div className="heading-footer">
                            <p>See more</p>
                            <Arrow />
                        </div>
                    </div>
                </Box>
            </div>
        </div>
    </section>
)

export default Welcome;