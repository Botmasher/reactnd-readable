import React from 'react';

function TestAPIPosts (props) {

	const {api_address, headers, uuid, pleaseDelete} = props;

	// test adding and updating a post
	if (!pleaseDelete) {
		const newPost={
			id: uuid,
			timestamp: Date.now(),
			title: 'My first React post',
			body: 'I need to write something longer to fill up this space. But I also need to keep this short so you pay attention. Also, it\'s about React.',
			author: 'cantfindme',
			category: 'react'
		};
		// create post
		fetch(`${api_address}/posts`, {method: 'POST', body: JSON.stringify(newPost), headers})
		.then(response => console.log(`Post posted! Dispatch updated post action to update store.`))
		// update post
		.then(() => {
			fetch(`${api_address}/posts/${uuid}`, {method: 'PUT', body: JSON.stringify({title: 'New title!', body: 'New text!!!'}), headers})
			.then(response => response.json()).then(data => console.log(data));
		})
		// update voteScore
		.then(() => {
			fetch(`${api_address}/posts/${uuid}`, {method: 'POST', body: JSON.stringify({option: 'upVote'}), headers})
			.then(response => response.json()).then(data => console.log(data));
		});
	}
	// test getting and deleting a post
	else {
		// read post
		fetch(`${api_address}/posts/${uuid}`, {method: 'GET', headers})
		.then(response => response.json())
		// delete post
		.then((data) => {
			console.log(data);
			if (data && data.id && data.id===uuid) {
				fetch(`${api_address}/posts/${uuid}`, {method: 'DELETE', headers})
				.then(response => console.log(`Post deleted! Actually, display flag set to false.`));
			}
		});
	}

	return(
		<div>Testing creating/updating/deleting a <strong>post</strong> through the API...</div>
	);
}

export default TestAPIPosts;
