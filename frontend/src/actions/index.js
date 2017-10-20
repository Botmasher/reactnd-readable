import * as API from '../utils';

/*
	API endpoint 			Description									Associated Action
	------------			----------- 								----------------- 
	GET /categories 		- read all categories 						READ_CATEGORIES
	GET /:category/posts 	- read all posts for a category 			READ_POSTS
	GET /posts 				- read all posts 							READ_CATEGORY_POSTS
	POST /posts 			- add one post 								ADD_POST
	GET /posts/:id 			- read one post (all of its details) 		READ_POST
	POST /posts/:id 		- vote one post 							VOTE_POST
	PUT /posts/:id 			- edit one post 							EDIT_POST
	DELETE /posts/:id 		- delete one post 							DELETE_POST
	GET /posts/:id/comments - read all comments on one post 	 		READ_COMMENTS		
	POST /comments 			- add one comment to one post 				ADD_COMMENT
	GET /comments/:id 		- read one comment (all of its details) 	READ_COMMENT
	POST /comments/:id 		- vote one comment 							VOTE_COMMENT
	PUT /comments/:id 		- edit one comment 							EDIT_COMMENT
	DELETE /comments/:id 	- delete one comment 						DELETE_COMMENT
 */
export const READ_CATEGORIES = 'READ_CATEGORIES';
//export const READ_POSTS = 'READ_POSTS';
export const READ_CATEGORY_POSTS = 'READ_CATEGORY_POSTS';
export const READ_POST = 'READ_POST';
export const ADD_POST = 'ADD_POST';
export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_POST = 'EDIT_POST';
//export const VOTE_POST = 'VOTE_POST'
export const DELETE_POST = 'DELETE_POST';
//export const READ_COMMENTS = 'READ_COMMENTS';
export const READ_COMMENT = 'READ_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
//export const VOTE_COMMENT = 'VOTE_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
//export const ADD_CATEGORY = 'ADD_CATEGORY'
//export const EDIT_CATEGORY = 'EDIT_CATEGORY';
//export const DELETE_CATEGORY = 'DELETE_CATEGORY';

export const REQUEST_POSTS = 'REQUEST_POSTS';
function requestPosts(category=null) {
	return {type: REQUEST_POSTS};
}

export const READ_POSTS = 'READ_POSTS';
function receiveReadPosts(posts, category=null) {
	return {type: READ_POSTS, posts};
}

export function readPosts() {
	return function(dispatch) {
		dispatch(requestPosts());
		return API.getPosts()
			.then(data => dispatch(receiveReadPosts(data)));
	}
}

export const REQUEST_COMMENTS = 'REQUEST_COMMENTS';
function requestComments() {
	return {type: REQUEST_COMMENTS};
}

export const READ_COMMENTS = 'READ_COMMENTS';
function receiveReadComments(comments) {
	return {type: READ_COMMENTS, comments}
}

export function readComments(postId) {
	return function(dispatch) {
		dispatch(requestComments());
		return API.getComments(postId)
			.then(data => dispatch(receiveReadComments(data)));
	}
}


export function addPost({ id, title, body, author, category }) {
	return {
		type: ADD_COMMENT,
		id,
		timestamp: Date.now(),
		title,
		body,
		author,
		category
	}
}

export function addComment({ id, parentId, body, author, category }) {
	return {
		type: ADD_COMMENT,
		id,
		parentId,
		timestamp: Date.now(),
		body,
		author,
		category
	}
}

export function editPost({ id, title, body, author, category }) {
	return {
		type: EDIT_POST,
		id,
		timestamp: Date.now(),
		title,
		body,
		author,
		category
	}
}

export function editComment({ id, parentId, body, author, category }) {
	return {
		type: EDIT_COMMENT,
		id,
		parentId,
		timestamp: Date.now(),
		body,
		author,
		category
	}
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
	}
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
	}
}

export function deletePost({ id }) {
	return {
		type: DELETE_POST,
		id
	}
}

export function deleteComment({ id }) {
	return {
		type: DELETE_COMMENT,
		id
	}
}
