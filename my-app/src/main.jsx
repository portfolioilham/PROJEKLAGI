import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // Tambahkan impor ini
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './distt/css/main.css';
import { ParallaxProvider } from 'react-scroll-parallax';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <BrowserRouter> 
    <ParallaxProvider>
      <App />
      </ParallaxProvider>
    </BrowserRouter> 
  </React.StrictMode>,
);
