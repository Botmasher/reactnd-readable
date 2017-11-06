import React from 'react';
import { Link } from 'react-router-dom';
import PostVoteContainer from '../containers/PostVoteContainer';
import CommentsContainer from '../containers/CommentsContainer';

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
						<Link to={`/post/${post.id}`}>{post.title}</Link>
						<PostVoteContainer postId={post.id} voteScore={post.voteScore} />
						by {post.author} on {formatDate(post.timestamp)}
						<CommentsContainer parentId={post.id} countOnly={true} />
					</li>
				))}
			</ul>
		</div>
	);
}

export default PostsList;
