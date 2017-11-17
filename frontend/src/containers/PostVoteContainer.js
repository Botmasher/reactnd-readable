import React from 'react';
import { connect } from 'react-redux';
import PostVote from '../components/PostVote';
import { votePost } from '../actions';
import PropTypes from 'prop-types';

function PostVoteContainer(props) {
  const handleVote = (event, postId, up) => {
        event.preventDefault();
        props.votePost(postId, up);
    };

    const { postId, voteScore } = props;
    return (
        <PostVote handleVote={handleVote} postId={postId} voteScore={voteScore} />
    );
}

function mapDispatchToProps(dispatch) {
	return {
		votePost: (postId, up) => dispatch(votePost(postId, up))
	};
}

PostVoteContainer.propTypes = {
	postId: PropTypes.string.isRequired,
	voteScore: PropTypes.number.isRequired
};

export default connect(null, mapDispatchToProps)(PostVoteContainer);
