import React from 'react';
import { connect } from 'react-redux';
import CommentsList from '../components/CommentsList';
import { selectCurrentComments } from '../selectors';
import { readComments, addComment, editComment, deleteComment, voteComment } from '../actions';
import PropTypes from 'prop-types';

class CommentsContainer extends React.Component {

	constructor(props) {
		super(props);
		this.state={inputId: '', message: '', addingNew: true};
	}

	handleSubmit = (event, details) => {
		event.preventDefault();
		const editedComment = details.id ? this.props.comments[details.id] : null;
		const newComment = editedComment
			? {
					...details,
					body: details.body ? details.body : editedComment.body,
					author: details.author ? details.author : editedComment.author,
					parentId: this.props.parentId
				}
			: {
					...details,
					parentId: this.props.parentId
				};

		const isMissingInfo = !details.id ? !details.body : !details.body && !details.author;

		if (isMissingInfo) {
			return this.setState({message: 'Please fill out your comment.'});
		} else if (editedComment) {
			this.setState({inputId: '', message: '', addingNew: false});
			return this.props.editComment(newComment);
		} else {
			this.setState({inputId: '', message: '', addingNew: false});
			return this.props.addComment(newComment);
		}
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
		this.setState({inputId: commentId, message: ''});
	};

	enableAddingNew = (event) => {
		event.preventDefault();
		this.setState({inputId: '', message: '', addingNew: true});
	};

	cancelAddingNew = (event) => {
		event.preventDefault();
		this.setState({inputId: '', message: '', addingNew: false});
	}

	componentDidMount() {
		this.props.readComments(this.props.parentId);
	}

	render() {
		const commentsGrammaticalNumber = this.props.comments.length === 1 ? 'comment' : 'comments';
		const comments = this.props.parentId
			? this.props.selectCurrentComments({comments: this.props.comments, post: {id: this.props.parentId}})
			: undefined;
		return (
			<div className="comments-container">
				<span className="comments-count">{`${comments.length} ${commentsGrammaticalNumber}`}</span>
				{!this.props.countOnly && (
					<CommentsList
						comments={comments.reverse()}
						inputId={this.state.inputId}
						message={this.state.message}
						addingNew={this.state.addingNew}
						enableAddingNew={this.enableAddingNew}
						handleCancel={this.cancelAddingNew}
						setAsInputting={this.setAsInputting}
						handleVote={this.handleVote}
						handleDelete={this.handleDelete}
						handleSubmit={this.handleSubmit}
					/>
				)}
			</div>
		);
	}
}

function mapStateToProps({comments}) {
	return {
		comments,
		selectCurrentComments
	};
}

function mapDispatchToProps(dispatch) {
	return {
		readComments: (parentId) => dispatch(readComments(parentId)),
		addComment: (details) => dispatch(addComment(details)),
		editComment: (details) => dispatch(editComment(details)),
		voteComment: (commentId, up) => dispatch(voteComment(commentId, up)),
		deleteComment: (commentId) => dispatch(deleteComment(commentId))
	};
}

CommentsContainer.propTypes = {
	parentId: PropTypes.string.isRequired,
	countOnly: PropTypes.bool
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer);
