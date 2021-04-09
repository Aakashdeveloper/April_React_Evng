import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import LoginComponent from './Login';
import RegisterComponent from './Register';
import Profile from './Profile';
import User from './UserApi'

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Route exact path="/" component={LoginComponent}/>
            <Route path="/register" component={RegisterComponent}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/list" component={User}/>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing