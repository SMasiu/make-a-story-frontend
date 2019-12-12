import React, {useState, useContext} from 'react';
import Axios from 'axios';

import '../../shared-css/login-form.css';
import Button from '../button/button';
import Box from '../box/box';
import {Link} from 'react-router-dom';
import './register-content.css';
import { url } from '../../api.conf';
import Context from '../../store/context';

const RegisterContent = ({history}) => {

    const {actions} = useContext(Context);
    const [email, setEmail] = useState('');
    const [nick, setNick] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfPassword] = useState('');
    const handleRegister = () => {
        const user = {email, nick, password, confirmPassword};
        
        Axios.post(`${url}/user/register`, user, {withCredentials: true})
            .then( ({data}) => {
                actions({type: 'user', payload: {email, nick, id: data.id}});
                history.push('/');
            })
            .catch( err => {
                console.log(err)
            });

    }

    return (
        <section className="login-wrapper">
            <div className="login-section-1">

                <h1>Register</h1>

                <input className="inp-secondary" placeholder="email" onChange={(e) => {setEmail(e.target.value)}}/>

                <input className="inp-secondary" placeholder="nick" onChange={(e) => {setNick(e.target.value)}}/>

                <input className="inp-secondary" placeholder="password" type="password" onChange={(e) => {setPassword(e.target.value)}}/>

                <input className="inp-secondary" placeholder="confirm password" type="password" onChange={(e) => {setConfPassword(e.target.value)}}/>

                <footer className="form-footer">
                    <div onClick={handleRegister}>
                        <Button>Register</Button>
                    </div>
                </footer>

                <div className="devider">or</div>

                <div className="redirect-wrapper">

                    <Link to="/login">
                        <Button>Login here</Button>
                    </Link>
                    
                </div>

                <aside className="img-wrapper">
                    <div className="inner-image-wrapper">
                        <div className="img-w-reg-1">
                            <Box>
                                <img src="write.jpeg" alt="login" />
                            </Box>
                        </div>
                        <div className="img-w-reg-2">
                            <Box>
                                <img src="vote.jpg" alt="login" />
                            </Box>
                        </div>
                        <div className="img-w-reg-3">
                            <Box>
                                <img src="read.jpeg" alt="login" />
                            </Box>
                        </div>
                    </div>
                </aside>

            </div>
        </section>
    )
}

export default RegisterContent;