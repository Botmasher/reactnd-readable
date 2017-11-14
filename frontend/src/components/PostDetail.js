import React from 'react';
import { Link } from 'react-router-dom';
import PostVoteContainer from '../containers/PostVoteContainer';

function PostDetail(props) {
	return (
		<div>
			{props.message==='delete' && (
				<div className="input-message">
					Are you sure you want to delete this post?
					<a href="/" onClick={(e) => props.handleDelete(e, props.history)}>confirm</a>
					<a href="/" onClick={(e) => props.toggleConfirmDelete(e)}>CANCEL</a>
				</div>
			)}

			{props.post && (
				<div>
					<h1 className="post-title">
						{props.post.title}
						<span className="post-edit-delete">
							<Link to={`/post/${props.post.id}/edit`}>edit</Link>
							<a href="/" onClick={(e) => props.toggleConfirmDelete(e)}>delete</a>
						</span>
					</h1>
					<div className="post-info">
						<p className="post-date-author">posted by {props.post.author}</p>
						<PostVoteContainer postId={props.post.id} voteScore={props.post.voteScore} />
					</div>
					<p className="post-body">{props.post.body}</p>
				</div>
			)}
		</div>
	);
}

export default PostDetail;
