import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import AddToHomescreen from 'react-add-to-homescreen'





ReactDOM.render(<App/>,  document.getElementById('root'));

serviceWorker.register();
