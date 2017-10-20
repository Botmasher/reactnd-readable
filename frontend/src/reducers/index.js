import {
	RECEIVE_POSTS,
	REQUEST_POSTS,
	ADD_POST,
	ADD_COMMENT,
	EDIT_POST,
	EDIT_COMMENT,
	DELETE_POST,
	DELETE_COMMENT,
	VOTE_POST,
	VOTE_COMMENT
} from '../actions';
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

function posts(state=initialPostState, action) {
	console.log(action.posts);
	switch (action.type) {
		case RECEIVE_POSTS:
			return ({
				...state,
				posts: [...action.posts]
			});
		case REQUEST_POSTS:
			return ({
				...state
			});
		case ADD_POST:
			return ({
				...state,
				posts: [...state.posts, action.post]
			});
		case EDIT_POST:
			return ([
				...state.filter(p => p.id!==action.post.id),
				action.post
			]);
		case VOTE_POST:
			return ([
				...state.filter(p => p.id!==action.post.id),
				action.post
			]);
		case DELETE_POST:
			return ([
				...state.filter(p => p.id!==action.post.id)
			]);
		default:
			return state;
	}
}

function comments(state=initialCommentState, action) {
	const {type, comment} = action;
	switch (type) {
		case ADD_COMMENT:
			return ({
				...state,
				comment
			});
		case EDIT_COMMENT:
			return ({
				...state.comments.filter(c => c.id!==comment.id),
				comment
			});
		case VOTE_COMMENT:
			return ({
				...state.comments.filter(c => c.id!==comment.id),
				comment
			});
		case DELETE_COMMENT:
			return ({
				...state.comments.filter(c => c.id!==comment.id)
			});
		default:
			return state;
	}
}

export default combineReducers({ posts, comments });
