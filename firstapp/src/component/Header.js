import React, {Component} from 'react';
import './Header.css';

class Header extends Component{
    constructor(){
        super()

        this.state={
            title:'React App',
            userInput:'User Text Here',
        }
    }

    handleChange=(event)=>{
        // console.log(event.target.value)
        this.setState({userInput:event.target.value?event.target.value:'User text Here'})
        this.props.userText(event.target.value)
    }

    render(){
        console.log(">>>>>render")
        return(
            <React.Fragment>
                <header>
                    <div className="logo">{this.state.title}</div>
                    <center>
                        <input onChange={this.handleChange}/>
                        <div style={{color:'white'}}>{this.state.userInput}</div>
                    </center>
                </header>
                <hr/>
            </React.Fragment>
        )
    }
}

export default Header;