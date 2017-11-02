import React from 'react';

class CreateEdit extends React.Component {
	
	constructor(props) {
		super(props);
		this.state={category: '', title: '', body: '', author: ''};
	}

	changeValue = (event) => {
		this.setState({[event.target.name]: event.target.value});
	};

	render() {
		return (
			<div>
				<div className="input-message"><p>{this.props.message}</p></div>
				<form onSubmit={(event) => this.props.handleSubmit(event, this.state, this.props.history)}>
					<label htmlFor="title">Title</label>
					<input
						type="text"
						name="title"
						id="title"
						value={this.props.post && !this.state.title ? this.props.post.title  : this.state.title}
						onChange={this.changeValue}
					/>
					<label htmlFor="author">Author</label>
					<input
						type="text"
						name="author"
						id="author"
						value={this.props.post && !this.state.author ? this.props.post.author : this.state.author}
						onChange={this.changeValue}
					/>
					<label htmlFor="body">Body</label>
					<textarea
						name="body"
						id="body"
						value={this.props.post && !this.state.body ? this.props.post.body : this.state.body}
						onChange={this.changeValue}
					/>
					<label htmlFor="category">Category</label>
					<input
						className="input-category"
						type="text"
						name="category"
						id="category"
						value={this.props.category && !this.state.category ? this.props.category : this.state.category}
						onChange={this.changeValue}
					/>
					<input type="submit" value="Submit" />
				</form>
				Create/Edit View
				<ul>
					<li>should have a form to create new post or edit existing posts</li>
					<li>when editing, existing data should be populated in the form</li>

					Can work for both post and comment?

					Type: 	presentation, form, receive data from PostDetail component

					Props: 	- existing data for post to edit
									- handler for submitting data

					State: 	- controlled component

					Seletors: 	- none

					Links: 	- home or just category
									- back up to PostDetail (or just show this on submit?)
				</ul>
			</div>
		);
	}
}

export default CreateEdit;
