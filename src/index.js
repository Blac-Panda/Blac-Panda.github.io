import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import AddToHomescreen from 'react-add-to-homescreen'

<AddToHomescreen onAddToHomescreenClick={this.handleAddToHomescreenClick}/>

handleAddToHomescreenClick = () => {
    alert(`
        1. Open Share menu
        2. Tap on "Add to Home Screen" button
    `)
}

ReactDOM.render(<App/>,  document.getElementById('root'));

serviceWorker.register();
