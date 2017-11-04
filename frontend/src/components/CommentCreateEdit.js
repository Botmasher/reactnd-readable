import React from 'react';

class CommentCreateEdit extends React.Component {
	constructor(props) {
		super(props);
		this.state={text: ''};
	}

	handleTextInput = (event) => {
		this.setState({text: event.target.value});
	};

	render() {
		return (
			<div>
				<textarea text={this.state.text} onChange={this.handleTextInput} />
				<a href="" onClick={this.props.handleSubmit}>ok</a>
			</div>
		);		
	}
}

export default CommentCreateEdit;
