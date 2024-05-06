import React from 'react';
import ReactDOM from 'react-dom/client';
import Weather from './Weather';
import App from './App';
import Cloud from './cloud';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
   <App />
   <Cloud />
  </>
);


