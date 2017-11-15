import React from 'react';
import PropTypes from 'prop-types';
import thumbsUp from '../icons/thumbs-up.png';
import thumbsDown from '../icons/thumbs-down.png';

function Comment(props) {
	const comment = props.details;
	return (
		<li key={comment.id} className="comment-details">
			<p>{comment.body}</p>
			<span>{comment.author} </span>
			<span>
				{comment.voteScore}
			</span>
			<span>
				<a href="" onClick={(e) => props.handleVote(e, comment.id, true)}>
					<img src={thumbsUp} width="12" alt="thumbs up" />
				</a> 
				<a href="" onClick={(e) => props.handleVote(e, comment.id, false)}>
					<img src={thumbsDown} width="12" alt="thumbs down" />
				</a> 
			</span>
			<span>
				<a href="" onClick={(e) => props.setAsInputting(e, comment.id)}>edit</a> 
				<a href="" onClick={(e) => props.handleDelete(e, comment.id)}>delete</a>
			</span>
		</li>
	);
}

Comment.propTypes = {
	details: PropTypes.object.isRequired,
	handleVote: PropTypes.func.isRequired,
	setAsInputting: PropTypes.func.isRequired,
	handleDelete: PropTypes.func.isRequired,
};

export default Comment;
