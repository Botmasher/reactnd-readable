import React from 'react';

function TestAPIComments(props) {
	
	const {api_address, headers, uuid, id, pleaseDelete} = props;

	const newComment = {
		id: id,
		timestamp: Date.now(),
		body: 'My very very firstmost comment! Can you even see it?',
		author: 'ifoundyou',
		category: 'react',
		parentId: uuid
	};

	// CRUD comment on a parent post
	fetch(`${api_address}/posts/${uuid}/comments`, {method: 'GET', headers})
	.then(response => response.json()).then(data => console.log(data));

	// create comment
	if (!pleaseDelete) {
		fetch(`${api_address}/comments/`, {method: 'POST', body: JSON.stringify(newComment), headers})
		.then(response => response.json()).then(data => console.log(data));

		// update comment
		fetch(`${api_address}/comments/${id}`, {method: 'PUT', body: JSON.stringify({timestamp: Date.now(), body: 'I updated the text of this existing comment!'}), headers})
		.then(response => response.json()).then(data => console.log(data));

		// update voteScore
		fetch(`${api_address}/comments/${id}`, {method: 'POST', body: JSON.stringify({option: 'downVote'}), headers})
		.then(response => response.json()).then(data => console.log(data));
	}
	// read and delete comment
	else {
		// read
		fetch(`${api_address}/posts/${uuid}/comments`, {method: 'GET', headers})
		.then(response => response.json()).then((data) => {
			if (data && data.filter(obj => obj.id===id)) {
				// delete
				fetch(`${api_address}/comments/${id}`, {method: 'DELETE', headers})
				.then(deletedResponse => deletedResponse.json()).then(deletedData => console.log(deletedData));
			}
		});
	}

	//.then(() => {
	//	fetch(`${api_address}/comments/${uuid}`, {method: 'POST', body: JSON.stringify({option: 'upVote'}), headers})
	//	.then(response => response.json()).then(data => console.log(data));
	//});

	return(
		<div>Testing creating/updating/deleting a <strong>comment</strong> through API...</div>
	);
}

export default TestAPIComments;
