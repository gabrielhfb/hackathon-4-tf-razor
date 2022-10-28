import "bootstrap/dist/css/bootstrap.css"
import Popper from "popper.js";
import React from 'react';
import ReactDOM from 'react-dom/client';
import "./Assets/css/index.css";
import "./Assets/css/style.css";
import "bootstrap/dist/js/bootstrap.bundle.min"
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

