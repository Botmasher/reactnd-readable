export const ADD_POST = 'ADD_POST';
export const ADD_COMMENT = 'ADD_COMMENT';
/*
	API endpoint 			Description									Associated Action
	------------			----------- 								----------------- 
	GET /categories 		- read all categories
	GET /:category/posts 	- read all posts for a category
	GET /posts 				- read all posts
	POST /posts 			- add one post 								ADD_POST
	GET /posts/:id 			- read one post (all of its details) 
	POST /posts/:id 		- vote one post 							VOTE_POST
	PUT /posts/:id 			- edit one post 							EDIT_POST
	DELETE /posts/:id 		- delete one post 							DELETE_POST
	GET /posts/:id/comments - read all comments on one post 			
	POST /comments 			- add one comment to one post 				ADD_COMMENT
	GET /comments/:id 		- read one comment (all of its details) 	
	POST /comments/:id 		- vote one comment 							VOTE_COMMENT
	PUT /comments/:id 		- edit one comment 							EDIT_COMMENT
	DELETE /comments/:id 	- delete one comment 						DELETE_COMMENT
 */
export const EDIT_POST = 'EDIT_POST';
export const VOTE_POST = 'VOTE_POST'
export const DELETE_POST = 'DELETE_POST';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const VOTE_COMMENT = 'VOTE_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

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

export function votePost({ id, title, body, author, category, voteScore }) {
	return {
		type: VOTE_POST,
		id,
		timestamp: Date.now(),
		title,
		body,
		author,
		category
		voteScore
	}
}

export function voteComment({ id, parentId, body, author, category, voteScore }) {
	return {
		type: VOTE_COMMENT,
		id,
		parentId,
		timestamp: Date.now(),
		body,
		author,
		category,
		voteScore
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
