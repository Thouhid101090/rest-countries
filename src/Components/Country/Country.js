import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name,area,population,flags} = props.country
    return (
        <div className='country'>
            <h1>Name : {name.common}</h1>
            <p>Area : {area}</p>
            <img src={flags.png} alt="" /><br />
            
            <small>Population : {population}</small>
          

            {/* <h1> Name : {props.name}</h1> */}
            {/* <p>Area : {props.area}</p>
            <small>Population : {props.population}</small> */}
            
        </div>
    );
};

export default Country;