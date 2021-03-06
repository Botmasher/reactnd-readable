import {
	ASYNC_REQUEST,
	READ_CATEGORIES,
	READ_POSTS,
	READ_POST,
	READ_COMMENTS,
	ADD_CATEGORY,
	ADD_POST,
	ADD_COMMENT,
	EDIT_CATEGORY,
	EDIT_POST,
	EDIT_COMMENT,
	DELETE_CATEGORY,
	DELETE_POST,
	DELETE_COMMENT,
	VOTE_POST,
	VOTE_COMMENT
} from '../actions';
import { combineReducers } from 'redux';

function categories(state={}, action) {
	switch (action.type) {
		case READ_CATEGORIES:
			return {
				...state,
				...action.categories
			};
		case ADD_CATEGORY:
			return {
				...state,
				[action.category.name]: action.category
			};
		case EDIT_CATEGORY:
			return {
				...state,
				[action.category.name]: action.category
			};
		case DELETE_CATEGORY:
			return {
				...(Object.keys(state).reduce((filteredCategories, categoryName) => (
					categoryName !== action.category.name ? { ...filteredCategories, [categoryName]: state[categoryName]} : filteredCategories
				), {}))
			};
		default:
			return state;
	}
}

function posts(state={}, action) {
	switch (action.type) {
		case ASYNC_REQUEST:
			return state;
		case READ_POSTS:
			return ({
				...state,
				...(action.posts.reduce((allPosts, post) => (
					!post.error && post.id && !post.deleted ? {...allPosts, [post.id]: post} : allPosts
				), {}))
			});
		case READ_POST:
			return !action.post.error && action.post.id && !action.post.deleted
				?	({
						...state,
						[action.post.id]: action.post
					})
				: state
			;
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
					!comment.error && comment.id && !comment.deleted && !comment.parentDeleted ? {...allComments, [comment.id]: comment} : allComments
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

export default combineReducers({ posts, comments, categories });
