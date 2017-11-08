import React from 'react';
import { Link } from 'react-router-dom';
import PostVoteContainer from '../containers/PostVoteContainer';

function PostDetail(props) {
	return (
		<div>
			{props.message==='delete' && (
				<div className="input-message">
					Are you sure you want to delete this post?
					<a href="/delete" onClick={(e) => props.handleDelete(e, props.history)}>Yes</a>
					<a href="/cancel" onClick={(e) => props.toggleConfirmDelete(e)}>No</a>
				</div>
			)}

			{props.post && (
				<div>
					<h1>
						{props.post.title}
						<span className="post-edit-delete">
							<Link to={`/post/${props.post.id}/edit`}>edit</Link>
							<a href="/delete" onClick={(e) => props.toggleConfirmDelete(e)}>delete</a>
						</span>
					</h1>
					<p><em>posted by {props.post.author}</em></p>
					<p>{props.post.body}</p>
					<PostVoteContainer postId={props.post.id} voteScore={props.post.voteScore} />
				</div>
			)}
		</div>
	);
}

export default PostDetail;
