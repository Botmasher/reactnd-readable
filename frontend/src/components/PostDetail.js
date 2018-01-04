import React from 'react';
import { Link } from 'react-router-dom';
import PostVoteContainer from '../containers/PostVoteContainer';
import PropTypes from 'prop-types';
import { truncate } from '../utils/truncate';

function PostDetail({ message, post, history, handleDelete, toggleConfirmDelete }) {
	const maxTitleLength = 72;
	return (
		<div>
			{message==='delete' && (
				<div className="input-message">
					Are you sure you want to delete this post?
					<a href="/" onClick={(e) => handleDelete(e, history)}>confirm</a>
					<a href="/" onClick={(e) => toggleConfirmDelete(e)}>CANCEL</a>
				</div>
			)}

			{post && (
				<div>
					<h1 className="post-title">
						{truncate(post.title)(maxTitleLength)}
						<span className="post-edit-delete">
							<Link to={`/${post.category}/${post.id}/edit`}>edit</Link>
							<a href="/" onClick={(e) => toggleConfirmDelete(e)}>delete</a>
						</span>
					</h1>
					<div className="post-info">
						<p className="post-date-author">posted in {post.category} by {post.author}</p>
						<PostVoteContainer postId={post.id} voteScore={post.voteScore} />
					</div>
					<p className="post-body">{post.body}</p>
				</div>
			)}
		</div>
	);
}

PostDetail.propTypes = {
	post: PropTypes.object,
	history: PropTypes.object,
	handleDelete: PropTypes.func.isRequired,
	toggleConfirmDelete: PropTypes.func.isRequired,
	message: PropTypes.string
};

export default PostDetail;
