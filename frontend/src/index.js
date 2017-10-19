import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import './index.css';

const createdStore = store();

ReactDOM.render(
	<Provider store={createdStore}><BrowserRouter><App /></BrowserRouter></Provider>, 
	document.getElementById('root')
);
