import React from 'react';
import { connect } from 'react-redux';
import PostDetail from '../components/PostDetail';
import CommentsContainer from '../containers/CommentsContainer';
import { readPost, deletePost, votePost } from '../actions';
import { Route } from 'react-router-dom';

class PostDetailContainer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {showComments: false, message: ''};
	}

	toggleComments = () => {
		this.setState((prevState) => ({showComments: !prevState.showComments}));
	};

	toggleConfirmDelete = (event) => {
		event.preventDefault();
		console.log('confirming delete');
		this.state.message==='delete' ? this.setState({message: ''}) : this.setState({message: 'delete'});
	};

	handleDelete = (event, history) => {
		event.preventDefault();
		this.props.deletePost(this.props.match.params.id, history);
	};

	componentDidMount() {
		this.props.readPost(this.props.match.params.id);
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
					/>
					<CommentsContainer parentId={this.props.match.params.id} countOnly={!showComments} />
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

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailContainer);
