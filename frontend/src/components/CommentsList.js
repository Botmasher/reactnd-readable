import React from 'react';
import Comment from '../components/Comment';
import CommentCreateEdit from '../components/CommentCreateEdit';
import PropTypes from 'prop-types';

function CommentsList(props) {
	return (
		<ul className="comments-list">
			{!props.inputId && props.addingNew
				? <CommentCreateEdit
						message={props.message}
						handleSubmit={props.handleSubmit}
						handleCancel={props.handleCancel}
					/>
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
									handleCancel={props.handleCancel}
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
				: <li>No comments found</li>
			}
		</ul>
	);
}

CommentsList.propTypes = {
	comments: PropTypes.array.isRequired,
	message: PropTypes.string,
	enableAddingNew: PropTypes.func,
	setAsInputting: PropTypes.func,
	handleSubmit: PropTypes.func,
	handleCancel: PropTypes.func,
	handleVote: PropTypes.func,
	handleDelete: PropTypes.func
};

export default CommentsList;
