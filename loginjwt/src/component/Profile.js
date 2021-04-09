import React,{Component} from 'react';
import {Link} from 'react-router-dom';

const url = "http://localhost:5000/api/auth/userinfo";

class Profile extends Component{
    constructor(){
        super()

        this.state={
            user:''
        }
    }
    
    conditionalRender = () => {
        if(this.state.user.role){
            if(this.state.user.role === "Admin"){
                return(
                    <Link className="btn btn-success" to="/list">
                        All User
                    </Link>
                )
            }
        }
    }

    handleLogout = () => {
        sessionStorage.removeItem('ltk')
        this.props.history.push('/')
    }

    render(){
        if(sessionStorage.getItem('ltk') == null){
            this.props.history.push('/')
        }
        sessionStorage.setItem('rtk',this.state.user.role)
        return(
            <div className="panel panel-success">
                <div className="panel-heading">
                    <h3>User Profile</h3>
                </div>
                <div className="panel-body">
                    <h1>Hi {this.state.user.name}</h1>
                    <h2>Your Email Id is {this.state.user.email}</h2>
                    <h2> Your Role is {this.state.user.role}</h2>
                </div>
                {this.conditionalRender()}
                <button className="btn btn-danger" onClick={this.handleLogout}>
                    Logout
                </button>
            </div>
        )
    }

    // api call with header in get call 
    componentDidMount(){
        fetch(url,{
            method:'GET',
            headers:{
                'x-access-token':sessionStorage.getItem('ltk')
            }
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                user:data
            })
        })
    }
}

export default Profile;