import { ADD_POST, ADD_COMMENT } from '../actions';
import { combineReducers } from 'redux';

const initialPostState = {
	id: null, 				// unique string identifier
	timestamp: null, 		// default Unix time track data
	title: null, 			// string
	body: null, 			// string
	author: null, 			// string
	category: [], 			// should be one of the categories provided by server
	voteScore: 1, 			// net votes post has received (default: 1)
	deleted: false 			// flag not to show post in front end
};

const initialCommentState = {
	id: null, 				// unique string identifier
	parentId: null, 		// dependency
	timestamp: null, 		// default Unix time track data
	body: null, 			// string
	author: null, 			// string
	category: [], 			// should be one of the categories provided by server
	voteScore: 1, 			// net votes post has received (default: 1)
	deleted: false, 		// flag not to show post in front end
	parentDeleted: false	// parent can be deleted but this comment not
};

function post(state=initialPostState, action) {
	switch (action.type) {
		case ADD_POST:
			return state;
		default:
			return state;
	}
}

function comment(state=initialCommentState, action) {
	switch (action.type) {
		case ADD_COMMENT:
			return state;
		default:
			return state;
	}
}

export default combineReducers({ post, comment });
