import React from 'react';

function Comment(props) {
	const comment = props.details
	return (
		<li key={comment.id}>{comment.body}<br/>by {comment.author} | {comment.voteScore} +1 -1 edit delete</li>
	);
}

export default Comment;
