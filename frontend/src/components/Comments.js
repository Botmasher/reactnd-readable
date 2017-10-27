import React from 'react';

function Comments(props) {
	return (
		<div>
			Basic comments view to show below posts.
			{props.comments.map(comment => (
				<p key={comment.id}>{comment.body}</p>
			))}
		</div>
	);
}

export default Comments;
