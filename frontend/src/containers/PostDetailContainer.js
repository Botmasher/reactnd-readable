import React from 'react';
import { connect } from 'react-redux';
import PostDetail from '../components/PostDetail';
import CommentsContainer from '../containers/CommentsContainer';
import PostVoteContainer from '../containers/PostVoteContainer';
import { readPost, deletePost, votePost } from '../actions';
import { Route, Link } from 'react-router-dom';
import { formatDate } from '../utils/formatDate';
import PropTypes from 'prop-types';

class PostDetailContainer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {showComments: true, message: ''};
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

	componentDidMount() {
		!this.props.seedPost && this.props.readPost(this.props.match.params.id);
	}

	render() {
		const post = this.props.seedPost ? this.props.seedPost : this.props.posts[this.props.match.params.id];
		const showComments = this.state.showComments;
		return (
			<Route render={({history}) => (
				!post
					? <div><h2>No post here!</h2><p>Check out posts and comments</p></div>
					: this.props.seedPost
						? <li key={post.id}>
								<Link to={`/${post.category}/${post.id}`}>{post.title}</Link>
								<div className="post-info">
									<p className="post-date-author">{formatDate(post.timestamp)} <em>by</em> {post.author}</p>
									<PostVoteContainer postId={post.id} voteScore={post.voteScore} />
									<span className="post-edit-delete">
										<Link to={`${post.category}/${post.id}/edit`}>edit</Link>
										<Link to="/" onClick={(e) => this.handleDelete(e, history)}>delete</Link>
									</span>
									<CommentsContainer parentId={post.id} countOnly={true} />
								</div>
							</li>
						: <div>
								<PostDetail
									post={post}
									history={history}
									message={this.state.message}
									toggleComments={this.toggleComments}
									toggleConfirmDelete={this.toggleConfirmDelete}
									handleDelete={this.handleDelete}
									handlePostNotFound={this.handlePostNotFound}
								/>
								<CommentsContainer
									parentId={post.id}
									countOnly={!showComments}
								/>
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
