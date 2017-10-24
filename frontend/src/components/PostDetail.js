import React from 'react';

function PostDetail(props) {
	return (
		<div>
			Post Detail View
			<ul>
				<li>should show the details of a post, including: Title, Body, Author, timestamp (in user readable format), and vote score</li>
				<li>should list all of the comments for that post, ordered by voteScore (highest first)</li>
				<li>should have controls to edit or delete the post</li>
				<li>should have a control to add a new comment</li>
				<li>implement comment form however you want (inline, modal, etc.)</li>
				<li>comments should also have controls for editing or deleting</li>
			</ul>
		</div>
	);
}

export default PostDetail;
