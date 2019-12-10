import React from 'react';
import './login-content.css';
import '../../shared-css/login-form.css';
import Button from '../button/button';
import Box from '../box/box';
import {Link} from 'react-router-dom';

const LoginContent = () => (
    <section className="login-wrapper">
        <div className="login-section-1">

            <h1>Login</h1>

            <input className="inp-secondary" placeholder="user name or email"/>

            <input className="inp-secondary" placeholder="password"/>

            <footer className="form-footer">

                <Button>Login</Button>

            </footer>

            <div className="devider">or</div>

            <div className="redirect-wrapper">

                <Link to="/register">
                    <Button>Create account here</Button>
                </Link>

            </div>

            <aside className="img-wrapper">
                <div className="inner-image-wrapper">
                    <div className="img-w-1">
                        <Box>
                            <img src="write.jpeg" alt="login"/>
                        </Box>
                    </div>
                    <div className="img-w-2">
                        <Box>
                            <img src="vote.jpg" alt="login"/>
                        </Box>
                    </div>
                    <div className="img-w-3">
                        <Box>
                            <img src="read.jpeg" alt="login"/>
                        </Box>
                    </div>
                </div>
            </aside>

        </div>
    </section>
)

export default LoginContent;