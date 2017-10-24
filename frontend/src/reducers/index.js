import {
	ASYNC_REQUEST,
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

function posts(state={}, action) {
	switch (action.type) {
		case ASYNC_REQUEST:
			return state;
		case READ_POSTS:
			return ({
				...state,
				...(action.posts.reduce((allPosts, post) => (
					{...allPosts, [post.id]: post}
				), {}))
			});
		case ADD_POST:
			return ({
				...state,
				[action.post.id]: action.post
			});
		case EDIT_POST:
			return ({
				...state,
				[action.post.id]: action.post
			});
		case VOTE_POST:
			return ({
				...state,
				[action.post.id]: action.post
			});
		case DELETE_POST:
			return ({
				...(Object.keys(state).reduce((allPosts, postId) => (
					postId !== action.post.id ? {...allPosts, [postId]: state[postId]} : allPosts
				), {}))
			});
		default:
			return state;
	}
}

function comments(state={}, action) {
	switch (action.type) {
		case ASYNC_REQUEST:
			return state;
		case READ_COMMENTS:
			return ({
				...state,
				...(action.comments.reduce((allComments, comment) => (
					{...allComments, [comment.id]: comment}
				), {}))
			});
		case ADD_COMMENT:
			return ({
				...state,
				[action.comment.id]: action.comment
			});
		case EDIT_COMMENT:
			return ({
				...state,
				[action.comment.id]: action.comment
			});
		case VOTE_COMMENT:
			return ({
				...state,
				[action.comment.id]: action.comment
			});
		case DELETE_COMMENT:
			return ({
				...(Object.keys(state).reduce((allComments, commentId) => (
					commentId !== action.comment.id ? {...allComments, [commentId]: state[commentId]} : allComments
				), {}))
			});
		default:
			return state;
	}
}

export default combineReducers({ posts, comments });
