import React from 'react';
import { Link } from 'react-router-dom';

// TODO functionality to add a post

function Default(props) {
	return (
		<div>
			{props.posts.length > 0
				? <h1>All Posts</h1>
				: <h2>no posts yet</h2>
			}

			<select onChange={(e) => props.sortPosts(e.target.value)}>
				<option value="timestamp-desc">newest to oldest</option>
				<option value="timestamp-asc">oldest to newest</option>
				<option value="voteScore-desc">highest rated</option>
				<option value="voteScore-asc">lowest rated</option>
				<option value="title-asc">by title (A-Z)</option>
				<option value="title-desc">by title (Z-A)</option>
			</select>

			<ul>
				{props.posts.map(post => (
					<li key={post.id}><Link to={`/posts/${post.id}/`}>{post.title}</Link></li>
				))}
			</ul>
		</div>
	);
}

export default Default;
