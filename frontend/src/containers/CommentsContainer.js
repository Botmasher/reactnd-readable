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

	constructor(props) {
		super(props);
		this.state={inputId: ''};
	}

	handleSubmit = (event, details) => {

		// do same thing as CreateEdit of comparing state to see if changed!

		// also check what happens when a create (not update/edit) comment is submitted - the component stays!

		this.setState({inputId: ''});
		console.log(details.id);
		event.preventDefault();
		details.id
			? this.props.editComment({...details})
			: this.props.addComment({...details, parentId: this.props.parentId})
		;
	};

	handleVote = (event, commentId, up) => {
		event.preventDefault();
		this.props.voteComment(commentId, up);
	};

	handleDelete = (event, commentId) => {
		event.preventDefault();
		this.props.deleteComment(commentId);
	};

	setAsInputting = (event, commentId) => {
		event.preventDefault();
		this.setState({inputId: commentId});
	};

	render() {
		return (
			<div>
				{!this.state.inputId && (
					<CommentCreateEdit handleSubmit={this.handleSubmit} />
				)}
				<ul className="comments-list">
					{this.props.comments.length > 0
						? this.props.comments.map(comment => (
								this.state.inputId && comment.id===this.state.inputId
									? <CommentCreateEdit
											key={comment.id}
											details={comment}
											handleSubmit={this.handleSubmit}
										/>
									: <Comment
											key={comment.id}
											details={comment}
											setAsInputting={this.setAsInputting}
											handleVote={this.handleVote}
											handleDelete={this.handleDelete}
										/>
							))
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
