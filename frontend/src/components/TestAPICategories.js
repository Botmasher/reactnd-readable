import React from 'react';

function TestAPICategories(props) {

	const {api_address, headers} = props;

	// test fetching categories
	const categories=[];
	fetch(`${api_address}/categories`, {headers})
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
	fetch(`${api_address}/posts/`, {headers})
	.then(response => response.json())
	.then((data) => {
		data.map(post => posts.push(post));
	});
	console.log(posts);

	// test fetching posts within a single category
	const categoryPosts=[];
	fetch(`${api_address}/react/posts/`, {headers})
	.then(response => response.json())
	.then((data) => {
		data.map((post) => {
			categoryPosts.push(post);
			return post;
		});
	});
	console.log(categoryPosts);

	return(
		<div>Testing API all categories & all post fetches...</div>
	);
}

export default TestAPICategories;
