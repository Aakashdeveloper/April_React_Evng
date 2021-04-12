import React,{Component} from 'react';
import {Link, withRouter} from 'react-router-dom';

class Header extends Component{
    constructor(){
        super()

        this.state={
            username:'',
            imageUrl:''
        }
    }

    conditionalHeader = () => {
        if(sessionStorage.getItem('username') == null){
            return(
                <li>
                    <a href="https://github.com/login/oauth/authorize?client_id=930f92e500db2f4d357c">
                        Login With Github
                    </a>
                </li>
            )
        }else{
            return(
                <li>
                    <a>
                        <img src={this.state.imageUrl} style={{height:50, width:50}}/>
                        Hi {sessionStorage.getItem('username')}
                    </a>
                </li>
            )
        }
    }

    render(){
        return (
            <nav class="navbar navbar-inverse">
                <div class="container-fluid">
                    <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>                        
                    </button>
                    <Link class="navbar-brand" to="/">Developer Funnel</Link>
                    </div>
                    <div class="collapse navbar-collapse" id="myNavbar">
                    <ul class="nav navbar-nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/viewBooking">Bookings</Link></li>
                    </ul> 
                    <ul className="nav navbar-nav navbar-right">
                        {this.conditionalHeader()}
                    </ul>  
                    </div>
                </div>
            </nav>
        )
    }

    //api call 
    componentDidMount(){
        const code = (this.props.location.search).split('=')[1];
        if(code){
            let requestedData={
                code:code
            }
            fetch('http://localhost:9900/oauth',{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(requestedData)
            })
            .then((res) => res.json())
            .then((data) => {
                var user = data.name;
                var img = data.avatar_url
                sessionStorage.setItem('username',user);
                this.setState({username:user, imageUrl:img})
            })
        }
    }
    
}

export default withRouter(Header);