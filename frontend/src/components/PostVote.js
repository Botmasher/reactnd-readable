import React from 'react';

function PostVote(props) {
	return (
		<div className="post-vote">
			{props.voteScore}
			<a href="" onClick={(e) => props.handleVote(e, props.postId, true)}>+1</a>
			<a href="" onClick={(e) => props.handleVote(e, props.postId, false)}>-1</a>
		</div>
	);
}

export default PostVote;
