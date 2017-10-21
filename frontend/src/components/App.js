import React from 'react';
import { connect } from 'react-redux';
import TestAPI from './TestAPI';
import { readPosts, readComments, votePost, voteComment, addPost, addComment } from '../actions'
import { Route } from 'react-router-dom';

class App extends React.Component {

	submitTestCommentVote = () => {
		this.props.voteComment('8tu4bsun805n8un48ve89', true); 	// careful to use a COMMENT id; true for voteUp
	};

	submitTestPostVote = () => {
		this.props.votePost('8xf0y6ziyjabvozdd253nd', false); 	// voteDown
	};

	submitTestAddPost = () => {
		this.props.addPost({title: 'A sample title', body: 'A sample test post body that is longer', author: 'Spaspuchis', category: 'react'});	
	};

	submitTestAddComment = () => {
		this.props.addComment({parentId: '8xf0y6ziyjabvozdd253nd', body: 'One sample test comment body!', author: 'Spaspuchis', category: 'redux'});	
	};

	componentDidMount() {
		this.props.readPosts(); 	// all posts
		this.props.readComments('8xf0y6ziyjabvozdd253nd'); 	// comments for a single post
	}

	render() {
		console.log(this.props);
		return (
			<Route render={() => (
				<div>
					<TestAPI displayThesePosts={this.props.posts} all={false} posts={false} comments={false} />
					<button onClick={this.submitTestAddPost}>Presst for Tesst</button>
				</div>
			)} />
		);
	}
}

function mapStateToProps({ posts, comments }) {
	return { posts, comments };
}

function mapDispatchToProps(dispatch) {
	return {
		readPosts: () => dispatch(readPosts()),
		readComments: (postId) => dispatch(readComments(postId)),
		votePost: (postId, up) => dispatch(votePost(postId, up)),
		voteComment: (commentId, up) => dispatch(voteComment(commentId, up)),
		addPost: (post) => dispatch(addPost(post)),
		addComment: (comment) => dispatch(addComment(comment))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
