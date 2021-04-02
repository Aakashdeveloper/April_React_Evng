import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Home from './Home';
import Post from './Post';
import Profile from './Profile';
import Footer from './Footer';
import Header from './Header'


const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Route exact path="/" component={Home}/>
            <Route path="/post" component={Post}/>
            <Route path="/profile" component={Profile}/>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing;