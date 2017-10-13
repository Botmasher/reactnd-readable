import React from 'react';

function TestAPI(props) {
	const api_address='http://localhost:3001';
	const headers = {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
		'Authorization': 'token-m8bmSr10tx9'
	};

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

	// test adding a post
	const uuid='something_unique_123';
	const singlePost={
		id: uuid,
		timestamp: Date.now(),
		title: 'My first React post',
		body: 'I need to write something longer to fill up this space. But I also need to keep this short so you pay attention. Also, it\'s about React.',
		author: 'cantfindme',
		category: 'react'
	};
	fetch(`${api_address}/posts`, {method: 'POST', body: JSON.stringify(singlePost), headers})
	.then(response => console.log(`Post posted! Dispatch updated post action to update store.`));

	fetch(`${api_address}/posts/${uuid}`, {method: 'GET', headers})
	.then(response => response.json()).then(data => console.log(data));

	// test updating a post
	fetch(`${api_address}/posts/${uuid}`, {method: 'PUT', body: JSON.stringify({title: 'New title!', body: 'New text!!!'}), headers})
	.then(response => response.json()).then(data => console.log(data));

	// test voting on a post
	fetch(`${api_address}/posts/${uuid}`, {method: 'POST', body: JSON.stringify({option: 'upVote'}), headers})
	.then(response => response.json()).then(data => console.log(data));

	// test deleting a post
	fetch(`${api_address}/posts/${uuid}`, {method: 'DELETE', headers})
	.then(response => console.log(`Post deleted! Actually, display flag set to false.`));

	return(<div>Testing API... see console for results.</div>);
}

export default TestAPI;
