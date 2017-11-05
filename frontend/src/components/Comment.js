import React from 'react';

function Comment(props) {
	const comment = props.details
	return (
		<li key={comment.id} className="comment-details">
			{comment.body} <br/>
			by {comment.author} | {comment.voteScore}
			<a href="" onClick={(e) => props.handleVote(e, comment.id, true)}>+1</a> 
			<a href="" onClick={(e) => props.handleVote(e, comment.id, false)}>-1</a> 
			<a href="" onClick={(e) => props.setAsInputting(e, comment.id)}>edit</a> 
			<a href="" onClick={(e) => props.handleDelete(e, comment.id)}>delete</a>
		</li>
	);
}

export default Comment;
