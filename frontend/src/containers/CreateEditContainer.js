import React from 'react';
import { connect } from 'react-redux';
import CreateEdit from '../components/CreateEdit';
import { readPost, addPost, editPost } from '../actions';
import { Route } from 'react-router-dom';

class CreateEditContainer extends React.Component {

	constructor(props) {
		super(props);
		this.state={message:''};
	}

	handleSubmit = (event, formState, history) => {
		event.preventDefault();
		
		const postId = this.props.match.params.id;
		const categoryId = this.props.match.params.category;
		const editedPost = postId ? this.props.posts[postId] : null;
	
		// fill in unchanged edited post info from store
		const newPost = editedPost
			? {
					...formState,
					title: formState.title ? formState.title : editedPost.title,
					body: formState.body ? formState.body : editedPost.body,
					author: formState.author ? formState.author : editedPost.author,
					category: formState.category ? formState.category : editedPost.category,
					id: postId
				}
			: { 
					...formState,
					category: categoryId && !formState.category ? categoryId : formState.category
				};

		const creating = !editedPost;
		const isBlank = Object.values(newPost).filter(value => value !== '').length === 0;
		const isMissingInfo = Object.values(newPost).filter(value => value === '').length > 0;
		const isUnchanged = !creating && Object.keys(newPost).filter(key => newPost[key] !== editedPost[key]).length === 0;

		if (isUnchanged) {
			console.log("unchanged!");
			return this.setState({message: 'No changes made to post.'});
		} else if (isBlank || isMissingInfo) {
			return this.setState({message: 'Please fill out all entries.'});
		} else if (!creating) {
			return this.props.editPost(newPost, history);
		} else {
			return this.props.addPost(newPost, history);
		}
	};

	componentDidMount () {
		const postId = this.props.match.params.id;
		if (postId) {
			this.props.readPost(postId);	
		}
	}

	render() {
		const currentPost = this.props.posts[this.props.match.params.id];
		const currentCategory = currentPost ? currentPost.category : this.props.match.params.category;
		return (
			<Route render={({history}) => (
				<CreateEdit
					message={this.state.message}
					history={history}
					post={currentPost}
					category={currentCategory}
					handleSubmit={this.handleSubmit}
				/>
			)}/>
		);
	}
}


function mapStateToProps({ posts, comments }) {
	return { posts, comments };
}

function mapDispatchToProps(dispatch) {
	return {
		readPost: (postId) => dispatch(readPost(postId)),
		addPost: (details, history) => dispatch(addPost(details, history)),
		editPost: (details, history) => dispatch(editPost(details, history))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateEditContainer);
