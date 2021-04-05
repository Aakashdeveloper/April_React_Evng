import React, {Component} from 'react';
import './Search.css'

class Search extends Component{
    render(){
        return(
            <div className="imageContainer">
                <div id="logo">
                    D!
                </div>
                <div className="heading">
                    Plan Trip With Us
                </div>
                <div className="locationSelector">
                    <select className="locationDropDown">
                        <option>-----SELECT CITY----</option>
                    </select>
                    <select className="reataurantsinput">
                        <option>-----SELECT HOTEL----</option>
                    </select>
                </div>
            </div>
        )
    }
}

export default Search