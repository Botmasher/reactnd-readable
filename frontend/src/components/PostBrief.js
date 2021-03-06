import React from 'react';
import CommentsContainer from '../containers/CommentsContainer';
import PostVoteContainer from '../containers/PostVoteContainer';
import { Link } from 'react-router-dom';
import { formatDate } from '../utils/formatDate';
import PropTypes from 'prop-types';
import { truncate } from '../utils/truncate';

function PostBrief({ post, history, handleDelete }) {
	const titleMaxLength = 72;
	const date = formatDate(post.timestamp);
	return (
		<li key={post.id}>
			<Link to={`/${post.category}/${post.id}`}>{truncate(post.title)(titleMaxLength)}</Link>
			<div className="post-info">
				<p className="post-date-author">
					{date} in <Link to={`${post.category}`}>{post.category}</Link> by <Link to={`/author/${post.author}`}>{post.author}</Link>
				</p>
				<PostVoteContainer postId={post.id} voteScore={post.voteScore} />
				<span className="post-edit-delete">
					<Link to={`${post.category}/${post.id}/edit`}>edit</Link>
					<Link to="/" onClick={(e) => handleDelete(e, history)}>delete</Link>
				</span>
				<CommentsContainer parentId={post.id} countOnly={true} />
			</div>
		</li>
	);
}

PostBrief.propTypes = {
	post: PropTypes.object.isRequired,
	history: PropTypes.object.isRequired,
	handleDelete: PropTypes.func.isRequired
};

export default PostBrief;
