import React from 'react';
import { Link } from 'react-router-dom';

function formatDate(timestamp) {
	const date = new Date(parseInt(timestamp, 10));
	return `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`;
}

function PostsList(props) {
	return (
		<div>
			<ul>
				{props.posts.map(post => (
					<li key={post.id}>
						<Link to={`/posts/${post.id}`}>{post.title}</Link> Like Dislike {post.voteScore}
						<br/>by {post.author} on {formatDate(post.timestamp)}
					</li>
				))}
			</ul>
		</div>
	);
}

export default PostsList;
