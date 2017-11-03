import React from 'react';
import PostsList from './PostsList';
import SortPosts from './SortPosts';
import { Link } from 'react-router-dom';

// TODO functionality to add a post

function Default(props) {
	return (
		<div>
			{props.posts.length > 0
				? <h1>All Posts</h1>
				: <h2>no posts yet</h2>
			}

			<p><Link to="/post/create">+ Add post</Link></p>

			<SortPosts sortPosts={props.sortPosts} />

			<PostsList posts={props.posts} />

		</div>
	);
}

export default Default;
