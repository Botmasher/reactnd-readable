import React from 'react';
import PostsList from './PostsList';
import SortPosts from './SortPosts';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Category(props) {
	return (
		<div>
			{props.posts.length > 0
				? <h1>Posts in {props.category}</h1>
				: <h2>no posts in {props.category}</h2>
			}

			<p>Category: {props.category}</p>

			<p><Link to={`/post/create/${props.category}`}>+ add post</Link></p>

			{props.posts.length > 1 && <SortPosts sortPosts={props.sortPosts} />}

			<PostsList posts={props.posts} />

		</div>
	);
}

Category.propTypes = {
	posts: PropTypes.array.isRequired,
	sortPosts: PropTypes.func.isRequired
};

export default Category;
