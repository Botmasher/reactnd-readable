import React from 'react';
import { connect } from 'react-redux';
import TestAPI from './TestAPI';
import { readPosts, readComments, votePost, voteComment, addPost, addComment, editPost, editComment, deletePost, deleteComment } from '../actions';
import { Route } from 'react-router-dom';

class App extends React.Component {

	submitTestCommentVote = () => {
		this.props.voteComment('8tu4bsun805n8un48ve89', true); 	// careful to use a COMMENT id; true for voteUp
	};
	submitTestPostVote = () => {
		this.props.votePost('8xf0y6ziyjabvozdd253nd', false); 	// voteDown
	};

	submitTestAddPost = () => {
		this.props.addPost({title: 'A sample title', body: 'A sample test post body that is longer', author: 'Spaspuchis', category: 'newcat'});
	};
	submitTestAddComment = () => {
		this.props.addComment({parentId: '8xf0y6ziyjabvozdd253nd', body: 'One sample test comment body!', author: 'Spaspuchis'});	
	};

	submitTestReadOnePost = () => {
		console.log(this.props.posts['8xf0y6ziyjabvozdd253nd']);
	};
	submitTestReadOneComment = () => {
		console.log(this.props.comments['894tuq4ut84ut8v4t8wun89g']);
	};
	submitTestReadCategoryPosts = () => {
		console.log(Object.values(this.props.posts).filter(post => post.category==='react'));

	};
	submitTestReadCategories = () => {
		Object.values(this.props.posts).reduce((categories, post) => {
			if (categories.includes(post.category)) return categories;
			return [...categories, post.category];
		}, []).map(x => console.log(x));
	};

	// ATTENTION: fetch full item first then submit all data (API.post.edit loops over props and replaces each)
	submitTestEditPost = () => {
		this.props.editPost({
			...this.props.posts['8xf0y6ziyjabvozdd253nd'],
			title: 'Udacity is the best place to learn React',
			body: 'That is at least what people USED to say before I edited this.',
		});
	};
	submitTestEditComment = () => {
		this.props.editComment({
			...this.props.comments['894tuq4ut84ut8v4t8wun89g'],
			body: 'Hi! What was fresh comment is now EDITED!'
		});
	};

	submitTestDeletePost = () => {
		const latestPost = Object.values(this.props.posts).reduce((latest, post) => (
			post.timestamp > latest.timestamp ? post : latest
		), {timestamp: 0});
		this.props.deletePost(latestPost.id);
	};
	submitTestDeleteComment = () => {
		const latestComment = Object.values(this.props.comments).reduce((latest, comment) => (
			comment.timestamp > latest.timestamp ? comment : latest
		), {timestamp: 0});
		this.props.deleteComment(latestComment.id);
	};

	componentDidMount() {
		this.props.readPosts(); 	// all posts
		this.props.readComments('8xf0y6ziyjabvozdd253nd'); 	// comments for a single post
	}

	render() {
		console.log(this.props.posts);
		console.log(this.props.comments);
		return (
			<Route render={() => (
				<div>
					<TestAPI displayThesePosts={Object.values(this.props.posts)} all={false} posts={false} comments={false} />
					<button onClick={this.submitTestAddPost}>Test add post</button>
					<button onClick={this.submitTestDeletePost}>Test delete post</button>| | 
					<button onClick={this.submitTestAddComment}>Test add comment</button>
					<button onClick={this.submitTestDeleteComment}>Test delete comment</button>
					<br/>
					<button onClick={this.submitTestEditPost}>Test edit post</button>
					<button onClick={this.submitTestEditComment}>Test edit comment</button>
					<br/>
					<button onClick={this.submitTestReadOnePost}>Test log post</button>
					<button onClick={this.submitTestReadOneComment}>Test log comment</button>
					<br/>
					<button onClick={this.submitTestReadCategories}>Log all categories</button>
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
		editPost: (post) => dispatch(editPost(post)),
		editComment: (comment) => dispatch(editComment(comment)),
		deletePost: (postId) => dispatch(deletePost(postId)),
		deleteComment: (commentId) => dispatch(deleteComment(commentId))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
