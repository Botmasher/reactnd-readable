import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import rootReducer from './reducers';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

// Test data for store only not from API
// Note the following properties are NOT set through body of API request:
// 	- voteScore
// 	- deleted
// 	- ? category (for comments)
// 	- parentDeleted
const seedData = {
	posts: [
		{
			id: 'reduxTestPost1',
			timestamp: Date.now(),
			title: 'First Redux test post',
			body: 'By this I mean not a test post in this Redux app but seed data not in the API given straight to createStore.',
			author: 'Reduximatoribus',
			category: 'redux',
			voteScore: 1,
			deleted: false
		},
	],
	comments: [
		{
			id: 'reduxTestComment1',
			parentId: 'reduxTestPost1',
			timestamp: Date.now(),
			body: 'Whoa, this... this is a comment passed directly to createStore not a comment in the API!!',
			author: 'Reduxulous',
			category: 'redux',
			voteScore: 1,
			deleted: false,
			parentDeleted: false
		},
	]
};

const store = createStore(
	rootReducer,
	seedData,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
	<BrowserRouter><Provider store={store}><App /></Provider></BrowserRouter>, 
	document.getElementById('root')
);
