import React from 'react';
import { connect } from 'react-redux';
import Comment from '../components/Comment';
import CommentCreateEdit from '../components/CommentCreateEdit';
import { addComment, editComment, deleteComment, voteComment } from '../actions';

class CommentsContainer extends React.Component {
	// pass props to handle:
	//	- CREATEEDIT CONTROLLED COMPONENT
	//  - VOTE AND DELETE COMMENT IN COMMENTS

	// if you want inline do this instead:
		// - Comment component vs CommentCreateEdit component
		// - iterate through props.comments and decide which one is being edited
		// - if one's being edited display the createedit
		// - if one's being read just display comment
		// - pass submit prop handler to createedit
		// - pass comment obj to createedit (if it's null confirm it goes back up to addComment)

	handleSubmit = (event, details) => {
		event.preventDefault();
		details.id
			? this.props.editComment(details)
			: this.props.addComment({details, parentId: this.props.parentId})
		;
	};

	render() {
		return (
			<div>
				<CommentCreateEdit />
				<p><a href="/">Leave a comment</a></p>
				<ul>
					{this.props.comments.length > 0
						? this.props.comments.map(comment => (<Comment details={comment} handleSubmit={this.handleSubmit} />))
						: <li>No comments found!</li>
					}
				</ul>
			</div>
		);
	}
}

function mapStateToProps() {
	return {};
}

function mapDispatchToProps(dispatch) {
	return {
		addComment: (details) => dispatch(addComment(details)),
		editComment: (details) => dispatch(editComment(details)),
		voteComment: (commentId, up) => dispatch(voteComment(commentId, up)),
		deleteComment: (commentId) => dispatch(deleteComment(commentId))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer);
