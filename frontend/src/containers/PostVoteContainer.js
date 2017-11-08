import React from 'react';
import { connect } from 'react-redux';
import PostVote from '../components/PostVote';
import { votePost } from '../actions';
import PropTypes from 'prop-types';

class PostVoteContainer extends React.Component {

	handleVote = (event, postId, up) => {
		event.preventDefault();
		this.props.votePost(postId, up);
	};

	render() {
		return (
			<PostVote handleVote={this.handleVote} postId={this.props.postId} voteScore={this.props.voteScore} />
		);
	}
}

function mapStateToProps({ posts, comments }) {
	return {};
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

export default connect(mapStateToProps, mapDispatchToProps)(PostVoteContainer);
