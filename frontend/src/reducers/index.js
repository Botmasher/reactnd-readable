import {
	REQUEST_POSTS, 			// async
	REQUEST_COMMENTS, 	// async
	READ_POSTS,
	READ_COMMENTS,
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
	id: null, 					// unique string identifier
	timestamp: null, 		// default Unix time track data
	title: null, 				// string
	body: null, 				// string
	author: null, 			// string
	category: [], 			// should be one of the categories provided by server
	voteScore: 1, 			// net votes post has received (default: 1)
	deleted: false 			// flag not to show post in front end
};

const initialCommentState = {
	id: null, 					// unique string identifier
	parentId: null, 		// dependency
	timestamp: null, 		// default Unix time track data
	body: null, 				// string
	author: null, 			// string
	category: [], 			// should be one of the categories provided by server
	voteScore: 1, 			// net votes post has received (default: 1)
	deleted: false, 		// flag not to show post in front end
	parentDeleted: false	// parent can be deleted but this comment not
};

function posts(state=initialPostState, action) {
	switch (action.type) {
		case REQUEST_POSTS:
			return state;
		case READ_POSTS:
			return ([
				...action.posts
			]);
		case ADD_POST:
			return ([
				...state,
				action.post
			]);
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
				...state.filter(p => p.id!==action.postId)
			]);
		default:
			return state;
	}
}

function comments(state=initialCommentState, action) {
	switch (action.type) {
		case REQUEST_COMMENTS:
			return state;
		case READ_COMMENTS:
			return ([
				...action.comments
			]);
		case ADD_COMMENT:
			return ([
				...state,
				action.comment
			]);
		case EDIT_COMMENT:
			return ([
				...state.filter(c => c.id!==action.comment.id),
				action.comment
			]);
		case VOTE_COMMENT:
			return ([
				...state.filter(c => c.id!==action.comment.id),
				action.comment
			]);
		case DELETE_COMMENT:
			return ([
				...state.filter(c => c.id!==action.commentId)
			]);
		default:
			return state;
	}
}

export default combineReducers({ posts, comments });
