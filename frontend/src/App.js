import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route, 
  Navigate, 
  Routes } from 'react-router-dom';

import PostDetails from './components/PostDetails/PostDetails';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import CreatorOrTag from './components/CreatorOrTag/CreatorOrTag';

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <BrowserRouter>
      <Container maxWidth="xl">
     
        <Navbar />
        <Routes>
          {/* <Route path="/" exact component={() => <Navigate to="/posts" />} /> */}
          <Route path="/" element={<Home />}></Route>
          {/* <Route
            // index
            exact
            path="terms-conditions"
            element={<TermsAndConditions />}
          /> */}
          <Route path="/posts" exact element={<Home/>} />
          <Route path="/posts/search" exact element={<Home/>} />
          <Route path="/posts/:id" exact element={<PostDetails/>} />
          <Route path={'/creators/:name'} element={<CreatorOrTag/>} />
          <Route path={'/tags/:name'} element={<CreatorOrTag/>} />
          <Route path="/auth" exact element={ !user? <Auth />: <Navigate to="/posts" />} />
        </Routes>
      </Container>
</BrowserRouter>
  );
};

export default App;