import React, { useEffect, useContext, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Context from './store/context';

import Home from './pages/home/home';
import Login from './pages/login/login';
import Register from './pages/register/register';
import Stories from './pages/stories/stories';
import Header from './components/header/header';
import Axios from 'axios';
import { url } from './api.conf';

function App() {

  const { actions, state } = useContext(Context);
  const [checkedUser, setChecked] = useState(false);

  useEffect(() => {
    if (!state.user.email && !checkedUser) {

      Axios.get(`${url}/user/verify`, { withCredentials: true })
        .then(({ data }) => {
          if (data.valid) {
            actions({ type: 'user', payload: { ...data } });
          }
        })
        .catch(err => {
          console.log(err)
        });

      setChecked(true);

    }
  }, [state, actions, checkedUser]);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/stories" component={Stories} />
      </BrowserRouter>
    </div>
  );
}

export default App;
