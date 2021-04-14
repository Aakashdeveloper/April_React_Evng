import React,{Component} from 'react';
import {connect} from 'react-redux';
import {movieList} from '../actions/actionfile';
import DisplayComponent from '../component/Display'

class Home extends Component{
    //call action 
    componentDidMount(){
        this.props.dispatch(movieList())
    }

    render(){
        return(
            <div>
                <h1>My Logs</h1>
                <DisplayComponent datalist={this.props.mydata}/>
            </div>
            
        )
    }

}

//we will recive the state from store
function mapStateToProps(state){
    return{
        mydata:state.films
    }
}

export default connect(mapStateToProps)(Home)