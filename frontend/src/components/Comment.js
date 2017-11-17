import React from 'react';
import PropTypes from 'prop-types';
import thumbsUp from '../icons/thumbs-up.png';
import thumbsDown from '../icons/thumbs-down.png';

function Comment(props) {
	const { details, handleVote, setAsInputting, handleDelete } = props;
	return (
		<li key={details.id} className="comment-details">
			<p>{details.body}</p>
			<span>{details.author} </span>
			<span>
				{details.voteScore}
			</span>
			<span>
				<a href="" onClick={(e) => handleVote(e, details.id, true)}>
					<img src={thumbsUp} width="12" alt="thumbs up" />
				</a> 
				<a href="" onClick={(e) => handleVote(e, details.id, false)}>
					<img src={thumbsDown} width="12" alt="thumbs down" />
				</a> 
			</span>
			<span>
				<a href="" onClick={(e) => setAsInputting(e, details.id)}>edit</a> 
				<a href="" onClick={(e) => handleDelete(e, details.id)}>delete</a>
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
