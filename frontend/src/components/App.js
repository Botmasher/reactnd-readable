import React from 'react';

function App(props) {

	const api_address='http://localhost:3001';
	const headers= {
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Authorization': 'token-m8bmSr10tx9'
		}
	};

	// test fetching categories
	const categories=[];
	fetch(`${api_address}/categories`, headers)
	.then(response => response.json())
	.then((data) => {
		data.categories.map((category) => {
			categories.push(category);
			return category;
		});
	});
	console.log(categories);

	// test fetching all posts
	const posts=[];
	fetch(`${api_address}/posts/`, headers)
	.then(response => response.json())
	.then((data) => {
		data.map(post => posts.push(post));
	});
	console.log(posts);

	// test fetching posts within a single category
	const categoryPosts=[];
	fetch(`${api_address}/react/posts/`, headers)
	.then(response => response.json())
	.then((data) => {
		data.map((post) => {
			categoryPosts.push(post);
			return post;
		});
	});
	console.log(categoryPosts);

	return (
		<div>Happiness shall live on in this code!</div>
	);
}

export default App;
