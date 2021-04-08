import React,{Component} from 'react';
import axios from 'axios';
import BookingDisplay from './bookingDisplay';

const url = "http://localhost:8900/booking";

class ViewBooking extends Component{
    constructor(){
        super()

        this.state={
            bookings:''
        }
    }


    render(){
        return(
            <BookingDisplay bookdata={this.state.bookings}/>
        )
    }


    componentDidMount(){
        axios.get(url).then((res) =>  {this.setState({bookings:res.data})})
    }
}

export default ViewBooking;