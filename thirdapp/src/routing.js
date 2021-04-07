import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './component/home/Home';
import ListingApi from './component/listing/listingApi';
import HotelDetails from './component/Details/HotelDetails';
import PlaceBooking from './component/Booking/placeBooking';
import BookingApi from './component/Booking/bookingApi';

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Route exact path="/" component={Home}/>
            <Route path="/list/:id" component={ListingApi}/>
            <Route path="/details/:id" component={HotelDetails}/>
            <Route path="/booking/:hotel_name" component={PlaceBooking}/>
            <Route path="/viewBooking" component={BookingApi}/>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing