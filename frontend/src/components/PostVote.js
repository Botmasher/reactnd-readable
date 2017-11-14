import React from 'react';
import PropTypes from 'prop-types';
import thumbsUp from '../icons/thumbs-up.png';
import thumbsDown from '../icons/thumbs-down.png';

function PostVote(props) {
	return (
		<div className="post-vote">
			{props.voteScore}
			<a href="" onClick={(e) => props.handleVote(e, props.postId, true)}>
				<img src={thumbsUp} width="16" alt="thumbs up" />
			</a>
			<a href="" onClick={(e) => props.handleVote(e, props.postId, false)}>
				<img src={thumbsDown} width="16" alt="thumbs down" />
			</a>
		</div>
	);
}

PostVote.propTypes = {
	postId: PropTypes.string.isRequired,
	voteScore: PropTypes.number.isRequired
};

export default PostVote;
