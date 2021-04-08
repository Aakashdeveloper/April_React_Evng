import React,{Component} from 'react';
import axios from 'axios';
import ListingDisplay from './listingDisplay';
import RoomFilter from '../filters/roomFilter';
import CostFilter from '../filters/costFilter'

const url = "https://developerfunnel.herokuapp.com/hotellist";

class Listing extends Component{
    constructor(){
        super()

        this.state={
            hotellist:''
        }
    }

    setDatPerFilter=(soretdData) => {
        this.setState({hotellist:soretdData})
    }

    render(){
        return(
            <div className="row">
                <div className="col-md-2">
                    <RoomFilter roomPerType={(data) => {this.setDatPerFilter(data)}} />
                    <CostFilter costPerType={(data) => {this.setDatPerFilter(data)}}/>
                </div>
                <div className="col-md-10">
                    <ListingDisplay listdata={this.state.hotellist}/>
                </div>
            </div>
        )
    }

    componentDidMount(){
        let TripId = this.props.match.params.id
        sessionStorage.setItem('TripId',TripId)
        axios.get(`${url}/${TripId}`)
        .then((res) =>  {this.setState({hotellist:res.data})})
    }
}

export default Listing