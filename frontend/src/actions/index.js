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

export function addPost({ id, timestamp, title, body, author, category }) {
	return {
		type: ADD_COMMENT,
		id,
		timestamp,
		title,
		body,
		author,
		category
	}
}

export function addComment({ id, parentId, timestamp, body, author, category }) {
	return {
		type: ADD_COMMENT,
		id,
		parentId,
		timestamp,
		body,
		author,
		category
	}
}

export function editPost({ id, timestamp, parentId }) {
	return {
		type: EDIT_POST,
		id,
		timestamp,
		title,
		body,
		author,
		category
	}
}

