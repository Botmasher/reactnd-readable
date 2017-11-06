import React from 'react';
import { connect } from 'react-redux';
import CommentsList from '../components/CommentsList';
import { selectCurrentComments } from '../selectors';
import { readComments, addComment, editComment, deleteComment, voteComment } from '../actions';

class CommentsContainer extends React.Component {
	// if you want inline do this instead:
		// - Comment component vs CommentCreateEdit component
		// - iterate through props.comments and decide which one is being edited
		// - if one's being edited display the createedit
		// - if one's being read just display comment
		// - pass submit prop handler to createedit
		// - pass comment obj to createedit (if it's null confirm it goes back up to addComment)

	constructor(props) {
		super(props);
		this.state={inputId: '', message: '', inputting: true};
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
			this.setState({inputId: '', message: '', inputting: false});
			return this.props.editComment(newComment);
		} else {
			this.setState({inputId: '', message:'', inputting: false});
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
		this.setState({inputId: commentId});
	};

	toggleInputting = (event) => {
		event.preventDefault();
		this.setState({inputting: true});
	};

	componentDidMount() {
		this.props.readComments(this.props.parentId);
	}

	render() {
		const comments = this.props.parentId
			? this.props.selectCurrentComments({comments: this.props.comments, post: {id: this.props.parentId}})
			: undefined;
		return (
			<div>
				{comments.length} comments
				{comments && !this.props.countOnly && (
					<CommentsList
						comments={comments}
						inputId={this.state.inputId}
						message={this.state.message}
						inputting={this.state.inputting}
						toggleInputting={this.toggleInputting}
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

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer);
