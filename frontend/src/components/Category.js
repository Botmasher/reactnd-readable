import React from 'react';
import PostsList from './PostsList';
import SortPosts from './SortPosts';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Category(props) {
	const { posts, category, sortPosts } = props;
	return (
		<div className="posts-list-wrapper">
			<div className="posts-list-top">
				<div className="posts-list-title">
					{posts.length > 0
						? <h1>Posts in {category}</h1>
						: <h2>no posts in {category}</h2>
					}
					<Link to={`/${category}/create`}>+add</Link>
				</div>
				<div className="posts-sort">
					<SortPosts sortPosts={sortPosts} />
				</div>
			</div>
			<div className="posts-list">
				<PostsList posts={posts} />
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
