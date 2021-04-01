import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import JSON from './db.json';
import NewsDisplay from './NewsDisplay';

class Home extends Component {
    constructor(){
        super()

        this.state={
            news:JSON
        }
    }

    render(){
        // console.log(this.state.news)
        return(
            <>
                <Header/>
                <NewsDisplay newsdata={this.state.news}/>
                <Footer year={2021} month={'April'}/>
            </>
        )
    }
    
}

export default Home;