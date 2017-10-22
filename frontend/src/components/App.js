import React from 'react';
import { connect } from 'react-redux';
import TestAPI from './TestAPI';
import { readPosts, readComments, votePost, voteComment, addPost, addComment, editPost, editComment } from '../actions'
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
		this.props.addComment({parentId: '8xf0y6ziyjabvozdd253nd', body: 'One sample test comment body!', author: 'Spaspuchis'});	
	};

	// Edit - fetch full item first then submit all data (API.post.edit loops over props and replaces each)
	submitTestEditPost = () => {
		// TODO read a single post
		
		// then edit it
		this.props.editPost();
	};
	submitTestEditComment = () => {
		// TODO read a single comment

		// then edit it
		this.props.editComment();
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
					<button onClick={this.submitTestAddComment}>Test adding comment</button>
					<button onClick={this.submitTestEditComment}>Test editing comment</button>
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
		addComment: (comment) => dispatch(addComment(comment)),
		editPost: (post) => null,
		editComment: (comment) => null
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
