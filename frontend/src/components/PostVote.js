import React from 'react';
import PropTypes from 'prop-types';
import thumbsUp from '../icons/thumbs-up.png';
import thumbsDown from '../icons/thumbs-down.png';

function PostVote(props) {
	const { postId, voteScore, handleVote } = props;
	return (
		<div className="post-vote">
			{voteScore}
			<a href="" onClick={(e) => handleVote(e, postId, true)}>
				<img src={thumbsUp} width="16" alt="thumbs up" />
			</a>
			<a href="" onClick={(e) => handleVote(e, postId, false)}>
				<img src={thumbsDown} width="16" alt="thumbs down" />
			</a>
		</div>
	);
}

PostVote.propTypes = {
	postId: PropTypes.string.isRequired,
	voteScore: PropTypes.number.isRequired,
	handleVote: PropTypes.func.isRequired
};

export default PostVote;
