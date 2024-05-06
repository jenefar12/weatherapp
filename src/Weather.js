import React from 'react';
import Cloud from './cloud';

import axios from 'axios';

import { useEffect, useState } from 'react';
function Weather(props){
    const city=props.inputData;
    const API_KEY="9903f56b44b16177ebe5a84205c5c4eb";
    const urll=`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_KEY}`
    const [weatherData, setWeatherData] = useState(null);
    
    useEffect(()=>{
        axios.get(urll)
        .then((response)=>{
            console.log(response.data);
            setWeatherData(response.data);
        })
        .catch((error) => {
            console.error('Error fetching weather data:', error);
            setWeatherData(null); 
        });
    },[city])

    return <>
    <h1 className='location'>hai {props.inputData}</h1>
    {weatherData && weatherData.length>0 &&
    <Cloud lat={weatherData[0].lat} lon={weatherData[0].lon}/>}
    </>
    }
  
export default Weather;