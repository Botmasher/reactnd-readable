import React from 'react';
import { connect } from 'react-redux';
import PostDetail from '../components/PostDetail';
import Comments from '../components/Comments';
import { selectCurrentComments } from '../selectors';
import { readPost, readComments } from '../actions';

class PostDetailContainer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {showComments: false};
	}

	toggleComments = () => {
		this.setState({showComments: true});
	};

	componentDidMount() {
		this.props.readPost(this.props.match.params.id);
		this.props.readComments(this.props.match.params.id);
	}

	render() {
		const post = this.props.posts[this.props.match.params.id];
		const showComments = this.state.showComments;
		return (
			<div>
				<PostDetail post={post} toggleComments={this.toggleComments} />
				{showComments && (
					<Comments comments={this.props.selectCurrentComments({comments: this.props.comments, post: post})} />
				)}
			</div>
		);
	}
}

function mapStateToProps({ posts, comments }) {
	return {
		posts,
		comments,
		selectCurrentComments: selectCurrentComments
	};
}

function mapDispatchToProps(dispatch) {
	return {
		readPost: (postId) => dispatch(readPost(postId)),
		readComments: (postId) => dispatch(readComments(postId))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailContainer);
