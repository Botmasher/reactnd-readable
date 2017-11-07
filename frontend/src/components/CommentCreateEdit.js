import React from 'react';

class CommentCreateEdit extends React.Component {
	constructor(props) {
		super(props);
		this.state={body: '', author: ''};
	}

	handleTextInput = (event) => {
		this.setState({[event.target.name]: event.target.value});
	};

	submit = (event) => {
		const details = this.props.details ? {...this.props.details, ...this.state} : this.state;
		this.props.handleSubmit(event, details);
	};

 	render() {
		return (
			<li key={this.props.details ? this.props.details.id : "newcomment"} className="comment-input">
				{this.props.message && (
					<div className="input-message">{this.props.message}</div>
				)}
				<textarea autoFocus 
					text={this.state.body}
					name="body"
					onChange={this.handleTextInput}
					defaultValue={this.props.details ? this.props.details.body : this.state.body}
				/>
				{!this.props.details
					? <label htmlFor="author">author 
							<input
								name="author"
								onChange={this.handleTextInput}
							/>
						</label>
					: <p>{this.props.details.author}</p>
				}
				<a href="" onClick={this.submit}>ok</a>
			</li>
		);		
	}
}

export default CommentCreateEdit;
