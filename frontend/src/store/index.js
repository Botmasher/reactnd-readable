import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

// Test data for store only not from API
// Note the following properties are NOT set through body of API request:
// 	- voteScore
// 	- deleted
// 	- ? category (for comments)
// 	- parentDeleted
const seedData = {
	posts: {
		'reduxTestPost1': {
			id: 'reduxTestPost1',
			timestamp: Date.now(),
			title: 'First Redux test post',
			body: 'By this I mean not a test post in this Redux app but seed data not in the API given straight to createStore.',
			author: 'Reduximatoribus',
			category: 'redux',
			voteScore: 1,
			deleted: false
		},
	},
	comments: {
		'reduxTestComment1': {
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
	}
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = () => createStore(
	rootReducer,
	//seedData,
	composeEnhancers(applyMiddleware(thunk))
);

export default store;
