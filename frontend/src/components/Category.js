import React from 'react';
import PostsList from './PostsList';
import SortPosts from './SortPosts';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Category(props) {
	return (
		<div className="posts-list-wrapper">
			<div className="posts-list-top">
				<div className="posts-list-title">
					{props.posts.length > 0
						? <h1>Posts in {props.category}</h1>
						: <h2>no posts in {props.category}</h2>
					}
					<Link to={`/${props.category}/create`}>+add</Link>
				</div>
				<div className="posts-sort">
					{props.posts.length > 1 && <SortPosts sortPosts={props.sortPosts} />}<br/>
				</div>
			</div>
			<div className="posts-list">
				<PostsList posts={props.posts} />
			</div>
		</div>
	);
}

Category.propTypes = {
	category: PropTypes.string.isRequired,
	posts: PropTypes.array.isRequired,
	sortPosts: PropTypes.func.isRequired
};

export default Category;
