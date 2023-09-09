import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'
const Countries = () => {
        const [countries, setCountries] = useState([]);
        useEffect( () =>{
           fetch('https://restcountries.com/v3.1/all') 
           .then(res => res.json())
           .then(data => setCountries(data))
        } ,[])
        console.log(countries);
    return (
        <div>
            
            <h1>Visiting The Countries  {countries.length} Countries.</h1>
           
           <div className='countries'>
           {
                countries.map(country => <Country 
                    country = {country}
                    // name = {country.name.common} 
                    // area ={country.area}
                    // population = {country.population}
                    ></Country>)
            }
           </div>
          
        </div>
    );
};

export default Countries;