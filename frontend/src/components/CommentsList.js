import React from 'react';
import Comment from '../components/Comment';
import CommentCreateEdit from '../components/CommentCreateEdit';

// figure out how to toggle off editing when someone clicks your Add Comment button

function CommentsList(props) {
	return (
		<ul className="comments-list">
			{!props.inputId && props.addingNew
				? <CommentCreateEdit message={props.message} handleSubmit={props.handleSubmit} />
				: <li><a href="/" onClick={props.enableAddingNew}>Add comment</a></li>
			}
			{props.comments.length > 0
				? props.comments.map(comment => (
						props.inputId && comment.id===props.inputId
							? <CommentCreateEdit
									message={props.message}
									key={comment.id}
									details={comment}
									handleSubmit={props.handleSubmit}
								/>
							: <Comment
									message={props.message}
									key={comment.id}
									details={comment}
									setAsInputting={props.setAsInputting}
									handleVote={props.handleVote}
									handleDelete={props.handleDelete}
								/>
					))
				: <li>No comments found!</li>
			}
		</ul>
	);
}

export default CommentsList;
