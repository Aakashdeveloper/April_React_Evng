import React from 'react';

function DisplayComponent(props){
    const renderList = ({myCity}) => {
        if(myCity){
            return myCity.map((item) => {
                return(
                    <div>
                        <h3>{item.city_name}</h3>
                    </div>
                )
            })
        }
    }
    return(
        <div>
            <center>
                <h2>Render City</h2>
                {renderList(props)}
            </center>
        </div>
    )
}

export default DisplayComponent