import React from 'react';

class CommentCreateEdit extends React.Component {
	constructor(props) {
		super(props);
		this.state={body: '', author: ''};
	}

	handleTextInput = (event) => {
		this.setState({[event.target.name]: event.target.value});
	};

	// update to use a <form /> here
 	render() {
		return (
			<div className="comment-input">
				<textarea
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
				<a href="" onClick={(e) => this.props.handleSubmit(e, {...this.props.details, ...this.state})}>ok</a>
			</div>
		);		
	}
}

export default CommentCreateEdit;
