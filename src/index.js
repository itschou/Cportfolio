import React from 'react';
import ReactDOM from 'react-dom/client';
import $ from "jquery";


import './index.css';
import './loading.css'
import './js/loading.js'

import App from './components/App';
import Navbar from './components/Navbar';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="ring is-centered has-text-centered LoadingBackGround" id='loadingRing'>
      Loading
      <span className='loading'></span>
    </div>
    <Navbar name="MOHAMMED CHOUAIB AFIRI" />
    <App />
  </React.StrictMode>
);
reportWebVitals();
