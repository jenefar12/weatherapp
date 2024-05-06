import { useState } from 'react';
import Weather from './Weather';
import './App.css'


function App() {
  const [data,setData]=useState("");
  const [subValue,setSubValue]=useState(null);

  const handleInput=(data)=>{
    setData(data.target.value);
  }
  
  const handleSubmit=(event)=>{
    event.preventDefault();
    const storedValue=data;
    setSubValue(storedValue);
  }

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <input type='text' placeholder='Enter the location' value={data} onChange={handleInput}></input>
        <button className="button button1" type='submit'>Get Weather</button>
      </form>
      <Weather inputData={subValue} />
    </div>
  );
}

export default App;

