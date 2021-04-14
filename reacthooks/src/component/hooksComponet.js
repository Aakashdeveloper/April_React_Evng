import React,{useState, useEffect} from 'react';
import DisplayComponent from './displayComponent';

const url = "https://developerfunnel.herokuapp.com/location"

function HooksComponent(){
    const [title] = useState('Hooks App')
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    const [city, setCity] = useState()

    const updatecount = () => {
        setCount(count+1)
    }

    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            setCity(data)
        })
    })

    return(
        <div>
            <h1>{title}</h1>
            <h2>{count}</h2>
            <button onClick={updatecount}>Counter</button>
            <h2>{count1}</h2>
            <button onClick={() => {setCount1(count1+1)}}>Counter1</button>
            <DisplayComponent myCity={city}/>
        </div>
        
    )
}

export default HooksComponent;