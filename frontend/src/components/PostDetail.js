import React from 'react';
import { Link } from 'react-router-dom';

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
					<p>
						{props.post.voteScore}&nbsp;
						<a href={`/post/${props.post.id}`} onClick={(e) => props.handleVote(e)}>+1</a>&nbsp;
						<a href={`/post/${props.post.id}`} onClick={(e) => props.handleVote(e, false)}>-1</a>
					</p>
					<button onClick={() => props.toggleComments()}>Toggle comments</button>
				</div>
			)}
			<ul>
				<li>should show the details of a post, including: Title, Body, Author, timestamp (in user readable format), and vote score</li>
				<li>should list all of the comments for that post, ordered by voteScore (highest first)</li>
				<li>should have controls to edit or delete the post</li>
				<li>should have a control to add a new comment</li>
				<li>implement comment form however you want (inline, modal, etc.)</li>
				<li>comments should also have controls for editing or deleting</li>

				Props: 	- handler for adding a new comment
								- handler for voting on comment
								- handler for editing a comment
								- handler for deleting a comment
			</ul>
		</div>
	);
}

export default PostDetail;
