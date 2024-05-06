import axios from 'axios';
import { WiDaySleet } from "react-icons/wi";
import { useEffect, useState } from 'react';
import './App.css'
function Cloud(props){
    const lat=props.lat;
    const lon=props.lon;
    const API_KEY="9903f56b44b16177ebe5a84205c5c4eb";
    const urlNew=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    const [tem, setTem] = useState('');
    
    useEffect(()=>{
        axios.get(urlNew)
        .then((response)=>{
            console.log(response.data);
            setTem(response.data);
        })
        .catch((error) => {
            console.error('Error fetching weather data:', error);
            setTem(null); 
        });

        return()=>{
            setTem("");
        }
    },[lat])

    return<>
    {tem && tem.weather && tem.weather.length>0 && (
        <>
        <div className='details'>
      <div className='icon'>
      <WiDaySleet />
      </div>
      <div className='deg'>
        <h2>{tem.wind.deg}deg</h2>
      </div>
      <div className='deg2'>
        <span>speed-{tem.wind.speed}km/h</span><span>humidity-{tem.main.humidity}%</span>
      </div>
      <div>
        <p>{tem.weather[0].description}</p>
      </div>
    </div>
        </>
    )}
    </>
}

export default Cloud;