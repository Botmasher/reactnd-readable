import React from 'react';
import Comment from '../components/Comment';
import CommentCreateEdit from '../components/CommentCreateEdit';

function CommentsList(props) {
	return (
		<div>
			{props.inputting && !props.inputId
				? <CommentCreateEdit message={props.message} handleSubmit={props.handleSubmit} />
				: <a href="" onClick={props.toggleInputting}>add new comment</a>
			}
			<ul className="comments-list">
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
		</div>
	);
}

export default CommentsList;
