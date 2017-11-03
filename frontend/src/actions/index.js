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

// Unused so far
//export const READ_COMMENT = 'READ_COMMENT';

// TODO - dynamic categories
//export const READ_CATEGORIES = 'READ_CATEGORIES';
//export const ADD_CATEGORY = 'ADD_CATEGORY'
//export const EDIT_CATEGORY = 'EDIT_CATEGORY';
//export const DELETE_CATEGORY = 'DELETE_CATEGORY';

// Async request response

export const ASYNC_REQUEST = 'ASYNC_REQUEST';
function asyncRequest() {
	return {type: ASYNC_REQUEST};
}

function asyncRequestReceive(apiCall, receiveCall, history=null) {
	return function(dispatch) {
		dispatch(asyncRequest());
		return apiCall.method(...apiCall.params)
			.then((data) => {
				history ? dispatch(receiveCall(data, history)) : dispatch(receiveCall(data));
			});
	};
}

// Read and store

export const READ_POSTS = 'READ_POSTS';
function receiveReadPosts(posts) {
	return {type: READ_POSTS, posts};
}
export function readPosts() {
	return asyncRequestReceive({method: API.getPosts, params: []}, receiveReadPosts);
}

export const READ_POST = 'READ_POST';
function receiveReadPost(post) {
	return {type: READ_POST, post};
}
export function readPost(postId) {
	return asyncRequestReceive({method: API.getPost, params: arguments}, receiveReadPost);
}

export const READ_COMMENTS = 'READ_COMMENTS';
function receiveReadComments(comments) {
	return {type: READ_COMMENTS, comments};
}
export function readComments(postId) {
	return asyncRequestReceive({method: API.getComments, params: arguments}, receiveReadComments);
}

export const READ_CATEGORY_POSTS = 'READ_CATEGORY_POSTS';
function receiveReadCategoryPosts(posts) {
	return {type: READ_CATEGORY_POSTS, posts};
}
export function readCategoryPosts(category) {
	return asyncRequestReceive({method: API.getCategoryPosts, params: arguments}, receiveReadCategoryPosts);
}

// Create

export const ADD_POST = 'ADD_POST';
function receiveAddPost(post, history) {
	history.push(`/post/${post.id}`);
	return {type: ADD_POST, post};
}
export function addPost(details, history) {
	const post = { ...details, id: uuid(), timestamp: Date.now() };
	return asyncRequestReceive({method: API.addPost, params: [post]}, receiveAddPost, history);
}

export const ADD_COMMENT = 'ADD_COMMENT';
function receiveAddComment(comment) {
	return {type: ADD_COMMENT, comment};
}
export function addComment(details) {
	const comment = { ...details, id: uuid(), timestamp: Date.now() };
	return asyncRequestReceive({method: API.addComment, params: [comment]}, receiveAddComment);
}

// Update

export const EDIT_POST = 'EDIT_POST';
function receiveEditPost(post, history) {
	history.push(`/post/${post.id}`);
	return {type: EDIT_POST, post};
}
export function editPost(details, history) {
	const post = { ...details, timestamp: Date.now() };
	return asyncRequestReceive({method: API.editPost, params: [post]}, receiveEditPost, history);
}

export const EDIT_COMMENT = 'EDIT_COMMENT';
function receiveEditComment(comment) {
	return {type: EDIT_COMMENT, comment};
}
export function editComment(details) {
	const comment = { ...details, timestamp: Date.now() };
	return asyncRequestReceive({method: API.editComment, params: [comment]}, receiveEditComment);
}

export const VOTE_POST = 'VOTE_POST';
function receiveVotePost(post) {
	return {type: VOTE_POST, post};
}
export function votePost(postId, up) {
	return asyncRequestReceive({method: API.votePost, params: arguments}, receiveVotePost);
}

export const VOTE_COMMENT = 'VOTE_COMMENT';
function receiveVoteComment(comment) {
	return {type: VOTE_COMMENT, comment};
}
export function voteComment(commentId, up) {
	return asyncRequestReceive({method: API.voteComment, params: arguments}, receiveVoteComment);
}

// Delete

export const DELETE_POST = 'DELETE_POST';
function receiveDeletePost(post, history) {
	history.push(`/${post.category}`);
	return {type: DELETE_POST, post};
}
export function deletePost(postId, history) {
	return asyncRequestReceive({method: API.deletePost, params: arguments}, receiveDeletePost, history);
}

export const DELETE_COMMENT = 'DELETE_COMMENT';
function receiveDeleteComment(comment) {
	return {type: DELETE_COMMENT, comment};
}
export function deleteComment(commentId) {
	return asyncRequestReceive({method: API.deleteComment, params: arguments}, receiveDeleteComment);
}
