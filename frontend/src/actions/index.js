import * as API from '../utils';
import uuid from 'uuid/v4';

/*
	API endpoint 						Description												Associated Action
	------------						----------- 											----------------- 
	GET /categories 				- read all categories 						READ_CATEGORIES
	GET /:category/posts 		- read all posts for a category 	READ_POSTS
	GET /posts 							- read all posts 									READ_CATEGORY_POSTS
	POST /posts 						- add one post 										ADD_POST
	GET /posts/:id 					- read one post (all details) 		READ_POST
	POST /posts/:id 				- vote one post 									VOTE_POST
	PUT /posts/:id 					- edit one post 									EDIT_POST
	DELETE /posts/:id 			- delete one post 								DELETE_POST
	GET /posts/:id/comments - read all comments on one post 	READ_COMMENTS		
	POST /comments 					- add one comment to one post 		ADD_COMMENT
	GET /comments/:id 			- read one comment (all details) 	READ_COMMENT
	POST /comments/:id 			- vote one comment 								VOTE_COMMENT
	PUT /comments/:id 			- edit one comment 								EDIT_COMMENT
	DELETE /comments/:id 		- delete one comment 							DELETE_COMMENT
 */

// Unused - why dispatch if already in store?
//export const READ_CATEGORIES = 'READ_CATEGORIES';
//export const READ_CATEGORY_POSTS = 'READ_CATEGORY_POSTS';
//export const READ_POST = 'READ_POST';
//export const READ_COMMENT = 'READ_COMMENT';

// TODO - dynamic categories
//export const ADD_CATEGORY = 'ADD_CATEGORY'
//export const EDIT_CATEGORY = 'EDIT_CATEGORY';
//export const DELETE_CATEGORY = 'DELETE_CATEGORY';

// Async meanwhile action creators

export const REQUEST_POSTS = 'REQUEST_POSTS';
function requestPosts() {
	return {type: REQUEST_POSTS};
}

export const REQUEST_COMMENTS = 'REQUEST_COMMENTS';
function requestComments() {
	return {type: REQUEST_COMMENTS};
}

// Read and store all

export const READ_POSTS = 'READ_POSTS';
function receiveReadPosts(posts) {
	return {type: READ_POSTS, posts};
}
export function readPosts() {
	return function(dispatch) {
		dispatch(requestPosts());
		return API.getPosts()
			.then(data => dispatch(receiveReadPosts(data)));
	};
}

export const READ_COMMENTS = 'READ_COMMENTS';
function receiveReadComments(comments) {
	return {type: READ_COMMENTS, comments};
}
export function readComments(postId) {
	return function(dispatch) {
		dispatch(requestComments());
		return API.getComments(postId)
			.then(data => dispatch(receiveReadComments(data)));
	};
}

// Create

export const ADD_POST = 'ADD_POST';
function receiveAddPost(post) {
	return {type: ADD_POST, post};
}
export function addPost({ title, body, author, category }) {
	const post = {
		id: uuid(),
		timestamp: Date.now(),
		title,
		body,
		author,
		category
	};
	return function(dispatch) {
		dispatch(requestPosts());
		return API.addPost(post)
			.then(data => dispatch(receiveAddPost(data)));
	};
}

export const ADD_COMMENT = 'ADD_COMMENT';
function receiveAddComment(comment) {
	return {type: ADD_COMMENT, comment};
}
export function addComment({ parentId, body, author }) {
	const comment = {
		id: uuid(),
		parentId,
		timestamp: Date.now(),
		body,
		author
	};
	return function(dispatch) {
		dispatch(requestComments());
		return API.addComment(comment)
			.then(data => dispatch(receiveAddComment(data)));
	};
}

// Update

export const EDIT_POST = 'EDIT_POST';
function receiveEditPost(post) {
	return {type: EDIT_POST, post};
}
export function editPost({ id, title, body, author, category, voteScore, deleted }) {
	const post = {
		id,
		timestamp: Date.now(),
		title,
		body,
		author,
		category,
		voteScore,
		deleted
	};
	return function(dispatch) {
		dispatch(requestPosts());
		return API.editPost(post)
			.then(data => dispatch(receiveEditPost(data)));
	};
}

export const EDIT_COMMENT = 'EDIT_COMMENT';
function receiveEditComment(comment) {
	return {type: EDIT_COMMENT, comment};
}
export function editComment({ id, parentId, body, author, category, voteScore, deleted, parentDeleted }) {
	const comment = {
		id,
		parentId,
		timestamp: Date.now(),
		body,
		author,
		category,
		voteScore,
		deleted,
		parentDeleted
	};
	return function(dispatch) {
		dispatch(requestComments());
		return API.editComment(comment)
			.then(data => dispatch(receiveEditComment(data)));
	};
}

export const VOTE_POST = 'VOTE_POST';
function receiveVotePost(post) {
	return {type: VOTE_POST, post};
}
export function votePost(postId, up) {
	return function(dispatch) {
		dispatch(requestPosts());
		return API.votePost(postId, up)
			.then(data => dispatch(receiveVotePost(data)));
	};
}

export const VOTE_COMMENT = 'VOTE_COMMENT';
function receiveVoteComment(comment) {
	console.log(comment);
	return {type: VOTE_COMMENT, comment};
}
export function voteComment(commentId, up) {
	return function(dispatch) {
		dispatch(requestComments());
		return API.voteComment(commentId, up)
			.then(data => dispatch(receiveVoteComment(data)));
	};
}

// Delete

export const DELETE_POST = 'DELETE_POST';
function receiveDeletePost(postId) {
	return {type: DELETE_POST, postId};
}
export function deletePost(postId) {
	return function(dispatch) {
		dispatch(requestPosts());
		return API.deletePost(postId)
			.then(() => dispatch(receiveDeletePost(postId)));
	};
}

export const DELETE_COMMENT = 'DELETE_COMMENT';
function receiveDeleteComment(commentId) {
	return {type: DELETE_COMMENT, commentId};
}
export function deleteComment(commentId) {
	return function(dispatch) {
		dispatch(requestComments());
		return API.deleteComment(commentId)
			.then(() => dispatch(receiveDeleteComment(commentId)));
	};
}
