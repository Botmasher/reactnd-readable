import React from 'react';
import { Link } from 'react-router-dom';
import PostVoteContainer from '../containers/PostVoteContainer';
import CommentsContainer from '../containers/CommentsContainer';
import PropTypes from 'prop-types';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function formatDate(timestamp) {
	const date = new Date(parseInt(timestamp, 10));
	return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

function PostsList(props) {
	return (
		<div className="posts-list">
			<ul>
				{props.posts.map(post => (
					<li key={post.id}>
						<Link to={`/post/${post.id}`}>{post.title}</Link>
						<div className="post-info">
							{formatDate(post.timestamp)} <em>by</em> {post.author}
							<PostVoteContainer postId={post.id} voteScore={post.voteScore} />
							<CommentsContainer parentId={post.id} countOnly={true} />
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}

PostsList.propTypes = {
	posts: PropTypes.array.isRequired
};

export default PostsList;
