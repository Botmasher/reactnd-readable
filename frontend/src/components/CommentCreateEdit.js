import React from 'react';
import PropTypes from 'prop-types';

class CommentCreateEdit extends React.Component {
	constructor(props) {
		super(props);
		this.state={body: '', author: ''};
	}

	handleTextInput = (event) => {
		this.setState({[event.target.name]: event.target.value.trim()});
	};

	submit = (event) => {
		const details = this.props.details ? {...this.props.details, ...this.state} : this.state;
		this.props.handleSubmit(event, details);
	};

 	render() {
 		const { details, message, handleCancel } = this.props;
		return (
			<li key={details ? details.id : "newcomment"} className="comment-input">
				{message && (
					<div className="input-message">{message}</div>
				)}
				<textarea autoFocus 
					text={this.state.body}
					name="body"
					onChange={this.handleTextInput}
					defaultValue={details ? details.body : this.state.body}
					placeholder="Leave a comment..."
				/>
				{!this.props.details
					? <p className="input-author">
							<label htmlFor="author">by: </label>
							<input
								name="author"
								onChange={this.handleTextInput}
								placeholder="author"
							/>
						</p>
					: <p className="input-author">{details.author}</p>
				}

				{this.state.body && (this.state.author || details) && (
					<span className="comment-submit-cancel"><a href="" onClick={this.submit}>submit</a></span>
				)}
				<span className="comment-submit-cancel"><a href="" onClick={handleCancel}>cancel</a></span>
			</li>
		);		
	}
}

CommentCreateEdit.propTypes = {
	message: PropTypes.string,
	details: PropTypes.object,
	handleSubmit: PropTypes.func.isRequired,
	handleCancel: PropTypes.func.isRequired
};

export default CommentCreateEdit;
