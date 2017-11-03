import React from 'react';
import { connect } from 'react-redux';
import PostDetail from '../components/PostDetail';
import Comments from '../components/Comments';
import { selectCurrentComments } from '../selectors';
import { readPost, readComments, deletePost, votePost } from '../actions';
import { Route } from 'react-router-dom';

class PostDetailContainer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {showComments: false, message: ''};
	}

	toggleComments = () => {
		this.setState({showComments: true});
	};

	toggleConfirmDelete = (event) => {
		event.preventDefault();
		console.log('confirming delete');
		this.state.message==='delete' ? this.setState({message: ''}) : this.setState({message: 'delete'});
	};

	handleVote = (event, up=true) => {
		event.preventDefault();
		this.props.votePost(this.props.match.params.id, up);
	};

	handleDelete = (event, history) => {
		event.preventDefault();
		this.props.deletePost(this.props.match.params.id, history);
	};

	componentDidMount() {
		this.props.readPost(this.props.match.params.id);
		this.props.readComments(this.props.match.params.id);
	}

	render() {
		const post = this.props.posts[this.props.match.params.id];
		const showComments = this.state.showComments;
		return (
			<Route render={({history}) => (
				<div>
					<PostDetail
						post={post}
						history={history}
						message={this.state.message}
						toggleComments={this.toggleComments}
						toggleConfirmDelete={this.toggleConfirmDelete}
						handleDelete={this.handleDelete}
						handleVote={this.handleVote}
					/>
					<div>
						{showComments && (
							<Comments comments={this.props.selectCurrentComments({comments: this.props.comments, post: post})} />
						)}
					</div>
				</div>
			)}/>
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
		readComments: (postId) => dispatch(readComments(postId)),
		deletePost: (postId, history) => dispatch(deletePost(postId, history)),
		votePost: (postId, up) => dispatch(votePost(postId, up))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailContainer);
