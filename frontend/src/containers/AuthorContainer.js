import React from 'react';
import { connect } from 'react-redux';
import { readPosts, readCategories } from '../actions';

const AuthorContainer = ({ posts, categories, match }) => {
	const author = match.params.author ? match.params.author : null;
	return (
		<div>
			<p>This is the profile page for author <strong>{author}</strong>.</p>
		</div>
	);
};

const mapStateToProps = ({ posts, categories }) => ({
	posts,
	categories
});

const mapDispatchToProps = (dispatch) => ({
	readPosts: () => dispatch(readPosts()),
	readCategories: () => dispatch(readCategories())
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthorContainer);
