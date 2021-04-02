import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import JSON from './db.json';
import NewsDisplay from './NewsDisplay';

class Home extends Component {
    constructor(){
        super()

        this.state={
            news:JSON,
            filtered: JSON
        }
    }
    /*
    var a = [2,4,6,7,3,9]
    a.filter((data)=> {return data>5})
    */

    filterNews=(userInput)=>{
        const output = this.state.news.filter((data) => {
            return data.title.toLowerCase().indexOf(userInput.toLowerCase())>-1
        })
        this.setState({filtered:output})
    }

    render(){
        // console.log(this.state.news)
        return(
            <>
                <Header userText={(data) => {this.filterNews(data)}}/>
                <NewsDisplay newsdata={this.state.filtered}/>
                <Footer year={2021} month={'April'}/>
            </>
        )
    }
    
}

export default Home;