import React from 'react';
import PostsList from './PostsList';
import SortPosts from './SortPosts';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Default(props) {
	return (
		<div>
			{props.posts.length > 0
				? <h1>All Posts</h1>
				: <h2>no posts yet</h2>
			}

			<p><Link to="/post/create">+ Add post</Link></p>

			{props.posts.length > 1 && <SortPosts sortPosts={props.sortPosts} />}

			<PostsList posts={props.posts} />

		</div>
	);
}

Default.propTypes = {
	posts: PropTypes.array.isRequired,
	sortPosts: PropTypes.func.isRequired
};

export default Default;
