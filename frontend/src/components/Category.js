import React from 'react';
import PostsList from './PostsList';
import SortPosts from './SortPosts';

// TODO functionality to add a post

function Category(props) {
	return (
		<div>
			{props.posts.length > 0
				? <h1>Posts in {props.category}</h1>
				: <h2>no posts in {props.category}</h2>
			}

			<p>Category title: {props.category}</p>

			<SortPosts sortPosts={props.sortPosts} />

			<PostsList posts={props.posts} />

		</div>
	);
}

export default Category;
