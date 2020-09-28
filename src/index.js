import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import 'font-awesome/css/font-awesome.min.css';
import { HashRouter } from "react-router-dom";


ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>, document.getElementById('root'));


serviceWorker.unregister();
