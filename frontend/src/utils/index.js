const api_address='http://localhost:3001';

const headers={
	'Accept': 'application/json',
	'Content-Type': 'application/json',
	'Authorization': 'token-m8bmSr10tx9'
};

const endpoints={
	categories: 'categories',
	posts: 'posts',
	comments: 'comments'
}

/*
	API endpoint 							Description															Associated Action
	------------							----------- 														----------------- 
	GET /categories 					read all categories 										READ_CATEGORIES
	GET /:category/posts 			read all posts for a category 					READ_POSTS
	GET /posts 								read all posts 													READ_CATEGORY_POSTS
	POST /posts 							add one post 														ADD_POST
	GET /posts/:id 						read one post (all of its details) 			READ_POST
	POST /posts/:id 					vote one post 													VOTE_POST
	PUT /posts/:id 						edit one post 													EDIT_POST
	DELETE /posts/:id 				delete one post 												DELETE_POST
	GET /posts/:id/comments 	read all comments on one post 	 				READ_COMMENTS		
	POST /comments 						add one comment to one post 						ADD_COMMENT
	GET /comments/:id 				read one comment (all of its details) 	READ_COMMENT
	POST /comments/:id 				vote one comment 												VOTE_COMMENT
	PUT /comments/:id 				edit one comment 												EDIT_COMMENT
	DELETE /comments/:id 			delete one comment 											DELETE_COMMENT
 */

function get(endpoint, method='GET', body=null) {
	const attributes = body!==null ? {headers, method, body: JSON.stringify(body)} : {headers, method};
	return fetch(`${api_address}/${endpoint}`, attributes)
	.then(response => response.json());
}

// Read
export function getCategories() {
	return get(endpoints.categories);
}

export function getPosts() {
	return get(endpoints.posts);
}

export function getCategoryPosts(category) {
	return get(`${category}/${endpoints.posts}`);
}

export function getComments(postId) {
	return get(`${endpoints.posts}/${postId}/${endpoints.comments}`);
}

// Add
export function addPost(post) {
	return get(`${endpoints.posts}`, 'POST', post);
}

export function addComment(comment) {
	return get(`${endpoints.comments}`, 'POST', comment);
}

// Update
export function editPost(postId) {}

export function editComment(commentId) {}

// Score
export function votePost(postId, up=true) {
	const option = up ? 'upVote' : 'downVote';
	return get(`${endpoints.posts}/${postId}`, 'POST', {option});
}

export function voteComment(commentId, up=true) {
	const option = up ? 'upVote' : 'downVote';
	return get(`${endpoints.comments}/${commentId}`, 'POST', {option});
}

// Delete
export function deletePost(postId) {}

export function deleteComment(commentId) {}
