import React, {useState, useContext} from 'react';
import Context from '../../store/context';
import './login-content.css';
import '../../shared-css/login-form.css';
import Button from '../button/button';
import Box from '../box/box';
import {Link} from 'react-router-dom';
import Axios from 'axios';
import { url } from '../../api.conf';

const LoginContent = ({history}) => {

    const {actions} = useContext(Context);
    const [userName, setUserName] = useState('');
    const [password, setUserPassword] = useState('');

    const handleLogin = () => {
        const loginBody = {userName, password};
        Axios.post(`${url}/user/login`, loginBody, {withCredentials: true})
            .then( ({data}) => {
                actions({type: 'user', payload: {...data}});
                history.push('/');
            })
            .catch( err => {
                console.log(err);
            });
    }

    return (
        <section className="login-wrapper">
            <div className="login-section-1">

                <h1>Login</h1>

                <input className="inp-secondary" placeholder="user name or email" onChange={(e) => setUserName(e.target.value)}/>

                <input className="inp-secondary" placeholder="password" type="password" onChange={(e) => setUserPassword(e.target.value)} />

                <footer className="form-footer">
                    <div onClick={handleLogin}>
                        <Button>Login</Button>
                    </div>
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
}

export default LoginContent;