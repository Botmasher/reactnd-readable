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
};

const get = (endpoint, method='GET', body=null) => {
	const attributes = body!==null ? {headers, method, body: JSON.stringify(body)} : {headers, method};
	return fetch(`${api_address}/${endpoint}`, attributes)
	.then(response => response.json());
};

// Read
export const getCategories = () => get(endpoints.categories);

export const getPosts = () => get(endpoints.posts);

export const getPost = postId => get(`${endpoints.posts}/${postId}`);

export const getCategoryPosts = category => get(`${category}/${endpoints.posts}`);

export const getComments = postId => get(`${endpoints.posts}/${postId}/${endpoints.comments}`);

// Add
export const addPost = post => get(`${endpoints.posts}`, 'POST', post);

export const addComment = comment => get(`${endpoints.comments}`, 'POST', comment);

// Update
export const editPost = post => get(`${endpoints.posts}/${post.id}`, 'PUT', post);

export const editComment = comment => get(`${endpoints.comments}/${comment.id}`, 'PUT', comment);

// Score
export const votePost = (postId, up=true) => {
	const option = up ? 'upVote' : 'downVote';
	return get(`${endpoints.posts}/${postId}`, 'POST', {option});
};

export const voteComment = (commentId, up=true) => {
	const option = up ? 'upVote' : 'downVote';
	return get(`${endpoints.comments}/${commentId}`, 'POST', {option});
};

// Delete
export const deletePost = postId => get(`${endpoints.posts}/${postId}`, 'DELETE');

export const deleteComment = commentId => get(`${endpoints.comments}/${commentId}`, 'DELETE');
