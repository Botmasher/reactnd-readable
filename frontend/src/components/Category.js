import React from 'react';
import { Link } from 'react-router-dom';

// TODO functionality to add a post

function Category(props) {
	return (
		<div>
			{props.posts.length > 0
				? <h1>Posts in {props.category}</h1>
				: <h2>no posts in {props.category}</h2>
			}

			<p>Category title: {props.category}</p>
			<p>Links to change category: HOME react redux</p>

			<select onChange={(e) => props.sortPosts(e.target.value)}>
				<option value="timestamp-desc">newest to oldest</option>
				<option value="timestamp-asc">oldest to newest</option>
				<option value="voteScore-desc">highest rated</option>
				<option value="voteScore-asc">lowest rated</option>
				<option value="title-asc">by title (A-Z)</option>
				<option value="title-desc">by title (Z-A)</option>
			</select>

			<p>Posts in this category:</p>
			<ul>
				{props.posts.map(post => (
					<li key={post.id}><Link to={`/posts/${post.id}/`}>{post.title}</Link></li>
				))}
			</ul>

			Link: 	- to other categories/home
							- to individual post
							- add post?
		</div>
	);
}

export default Category;
