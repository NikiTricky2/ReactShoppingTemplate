import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';

import './css/bootstrap.min.css';
import './css/custom.css'

ReactDOM.render(( 
    <BrowserRouter >
    <App />
    </BrowserRouter>
), document.getElementById('root'));