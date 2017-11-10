import {
	ASYNC_REQUEST,
	READ_POSTS,
	READ_POST,
	READ_COMMENTS,
	READ_CATEGORIES,
	READ_CATEGORY_POSTS,
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
		case READ_POST:
			return ({
				...state,
				[action.post.id]: action.post
			});
		case READ_CATEGORY_POSTS:
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

function categories(state={}, action) {
	switch (action.type) {
		case READ_CATEGORIES:
			return {
				...state,
				...action.categories
			};
		default:
			return state;
	}
}

export default combineReducers({ posts, comments, categories });
