import React, { useEffect, useContext, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Axios from 'axios';
import './App.css';
import { url } from './api.conf';

import Context from './store/context';
import Home from './pages/home/home';
import Login from './pages/login/login';
import Register from './pages/register/register';
import Stories from './pages/stories/stories';
import ReadBook from './pages/read-book/read-book';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import News from './pages/news/news';
import AddNewFragment from './pages/add-new-fragment/add-new-fragment';

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
        <div className="page-wrapper">
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/stories" component={Stories} />
          <Route path="/read-book/:storyId" component={ReadBook} />
          <Route path="/news/:storyId" component={News} />
          <Route path="/add-new-fragment/:storyId" component={AddNewFragment} />
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
