import React from 'react';
import { connect } from 'react-redux';
import PostDetail from '../components/PostDetail';
import PostBrief from '../components/PostBrief';
import CommentsContainer from '../containers/CommentsContainer';
import { readPost, deletePost, votePost } from '../actions';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

class PostDetailContainer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {showComments: true, message: ''};
	}

	componentDidMount() {
		!this.props.seedPost && this.props.readPost(this.props.match.params.id);
	}

	toggleComments = (event) => {
		event.preventDefault();
		this.setState((prevState) => ({showComments: !prevState.showComments}));
	};

	toggleConfirmDelete = (event) => {
		event.preventDefault();
		this.state.message==='delete' ? this.setState({message: ''}) : this.setState({message: 'delete'});
	};

	handleDelete = (event, history) => {
		event.preventDefault();
		const postId = this.props.seedPost ? this.props.seedPost.id : this.props.match.params.id;
		this.props.deletePost(postId, history);
	};

	render() {
		const post = !this.props.seedPost ? this.props.posts[this.props.match.params.id] : this.props.seedPost;
		const showComments = this.state.showComments;
		return (
			<Route render={({history}) => (
				<div>
					{!post && (
						<div><h2>No post here!</h2><p>Check out posts and comments</p></div>
					)}
					{post && this.props.seedPost && (
						<PostBrief post={post} history={history} handleDelete={this.handleDelete} />
					)}
					{post && !this.props.seedPost && (
						<div>
							<PostDetail
								post={post}
								history={history}
								message={this.state.message}
								toggleComments={this.toggleComments}
								toggleConfirmDelete={this.toggleConfirmDelete}
								handleDelete={this.handleDelete}
							/>
							<CommentsContainer
								parentId={post.id}
								countOnly={!showComments}
							/>
						</div>
					)}
				</div>
			)}/>
		);
	}
}

function mapStateToProps({ posts, comments }) {
	return {
		posts,
		comments
	};
}

function mapDispatchToProps(dispatch) {
	return {
		readPost: (postId) => dispatch(readPost(postId)),
		deletePost: (postId, history) => dispatch(deletePost(postId, history)),
		votePost: (postId, up) => dispatch(votePost(postId, up))
	};
}

PostDetailContainer.propTypes = {
	seedPost: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailContainer);
