import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { readPosts, readComments } from '../actions';

class AuthorContainer extends React.Component {

	componentDidMount() {
		this.props.readComments();
		this.props.readPosts();
	}

	render() {
		const { posts, comments, match } = this.props;
		const author = match.params.author ? match.params.author : null;
		const authoredPosts = Object.values(posts).reduce((postsByAuthor, currentPost) => {
			return (currentPost.author === author ? [...postsByAuthor, currentPost] : postsByAuthor);
		}, []);
		console.log(posts);
		// TODO reduce over comments for user comments - perhaps use backend model with ids instead
		//const authoredComments = comments.reduce((commentsByAuthor, currentComment) => {
		//	return (currentComment.author === author ? [...commentsByAuthor, currentComment] : commentsByAuthor);
		//}, []);
		return (
			<div>
				<h1>Profile page for <strong>{author}</strong>.</h1>
				<p>Posts authored by {author}:</p>
				<ul>
					{authoredPosts.map(post => (
						<li key={post.id}><Link to={`/${post.category}/${post.id}`}>{post.title}</Link></li>
					))}
				</ul>
			</div>
		);
	}
};

const mapStateToProps = ({ posts, comments }) => ({
	posts,
	comments
});

const mapDispatchToProps = (dispatch) => ({
	readPosts: () => dispatch(readPosts()),
	readComments: () => dispatch(readComments())
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthorContainer);
