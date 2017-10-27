import React from 'react';

function PostDetail(props) {
	return (
		<div>
			<h1>{props.post && props.post.title}</h1>
			<p>{props.post && props.post.body}</p>

			<button onClick={() => props.toggleComments()}>Toggle comments</button>
		
			Post Detail View
			<ul>
				<li>should show the details of a post, including: Title, Body, Author, timestamp (in user readable format), and vote score</li>
				<li>should list all of the comments for that post, ordered by voteScore (highest first)</li>
				<li>should have controls to edit or delete the post</li>
				<li>should have a control to add a new comment</li>
				<li>implement comment form however you want (inline, modal, etc.)</li>
				<li>comments should also have controls for editing or deleting</li>

				Type: 	presentation, receive data from Category commponent

				Split: 	CommentDetail

				Props: 	- one post object
								- all of the comment objects with parentId matching post object id
								- handler for editing the post
								- handler for deleting the post
								- handler for voting on the post
								- handler for adding a new comment
								- handler for voting on comment
								- handler for editing a comment
								- handler for deleting a comment

				State: 	- toggle comment input

				Selectors: 	- currently viewed comments
										- sorting for comments?

				Links: 	- home
								- category
								- edit post?
								- delete post?
								- add comment (modal?)

			</ul>
		</div>
	);
}

export default PostDetail;
