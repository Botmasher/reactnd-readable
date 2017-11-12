import React from 'react';
import PostsList from './PostsList';
import SortPosts from './SortPosts';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Default(props) {
	return (
		<div className="posts-list-wrapper">
			<div className="posts-list-top">
				<div className="posts-list-title">
					{props.posts.length > 0
						? <h1>All Posts</h1>
						: <h2>no posts yet</h2>
					}
					<Link to="/post/create">+ Add</Link>
				</div>
				<div className="posts-sort">
					{props.posts.length > 1 && <SortPosts sortPosts={props.sortPosts} />}
				</div>
			</div>

			<PostsList posts={props.posts} />

		</div>
	);
}

Default.propTypes = {
	posts: PropTypes.array.isRequired,
	sortPosts: PropTypes.func.isRequired
};

export default Default;
