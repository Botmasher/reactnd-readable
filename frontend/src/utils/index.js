const api_address='http://localhost:3001';

const headers={
	'Accept': 'application/json',
	'Content-Type': 'application/json',
	'Authorization': 'token-m8bmSr10tx9'
};

const endpoints={
	categories: 'categories/',
	posts: 'posts/',
}

function get(endpoint, method='GET', body=null) {
	return fetch(`${api_address}/${endpoint}`, {headers, method, body})
	.then(response => response.json());
}

export function getCategories() {
	return get(endpoints.categories);
}

export function getPosts() {
	return get(endpoints.posts);
}

export function getCategoryPosts(category) {
	return get(`${category}/${endpoints.posts}`);
}
