import React from 'react';
import ReactDOM from 'react-dom/client';


import './index.css';

import App from './components/App';
import Navbar from './components/Navbar';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar name="CHOUAIB PORTFOLIO"/>
    <App />
  </React.StrictMode>
);
reportWebVitals();
