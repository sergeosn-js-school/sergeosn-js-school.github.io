import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App userUrl='https://api.github.com/users/sergeosn-js-school' />, document.getElementById('root'));
registerServiceWorker();
