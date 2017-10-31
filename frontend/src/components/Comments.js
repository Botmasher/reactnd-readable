import React from 'react';
import { Link } from 'react-router-dom';

function Comments(props) {
	return (
		<div>

			<p><Link to="/">Leave a comment</Link></p>
			
			{props.comments.length > 0
				? props.comments.map(comment => (
						<p key={comment.id}>{comment.body}<br/>by {comment.author} | {comment.voteScore} +1 -1 edit delete</p>
					))
				: <p>No comments found.</p>
			}

		</div>
	);
}

export default Comments;
