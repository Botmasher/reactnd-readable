import React from 'react';
import { connect } from 'react-redux';
import CreateEdit from '../components/CreateEdit';
import { readPost, addPost, editPost } from '../actions';
import { Route } from 'react-router-dom';

class CreateEditContainer extends React.Component {

	handleSubmit = (event, formState, history) => {
		event.preventDefault();
		
		const newPost = {...formState};

		// fill in unchanged edited post info from store
		Object.keys(newPost).map(postProperty => {
			newPost[postProperty] = !newPost[postProperty] && this.props.match.params.id
				? this.props.posts[this.props.match.params.id][postProperty]
				: newPost[postProperty]
			;
		});

		const creating = !this.props.posts[this.props.match.params.id];
		const isBlank = Object.values(newPost).filter(value => value !== '').length === 0;
		const isMissingInfo = Object.values(newPost).filter(value => value === '').length > 0;

		console.log(newPost);

		// "filled out" post: merged oldPost and newPost data gave all values nonempty strings

		// if something's not filled out pass that back to form to display error
		// if everything's not filled out ???
		// if everything's filled out and !creating -> editPost(postId, data)
		// if everything's filled out and creating -> addPost(data)

		// modify create and update actions+utils so that history is passed in and new url is pushed
			// - either way go to the new/modded post
		// ?modify delete actions+utils so that history is passed in and new url is pushed?
			// - go to the category page

		if (!creating) {
			return this.props.editPost({ ...newPost, id: this.props.match.params.id }, history);
		} else if (isBlank || isMissingInfo) {
			// deal with blanks
		} else {
			return this.props.addPost(newPost, history);
		}

		// if you get BLANK STATE back then everything is
			// ? need to setup a post method in utils and adjust actions????
	};

	componentDidMount () {
		const postId = this.props.match.params.id;
		if (postId) {
			this.props.readPost(postId);	
		}
		// NOPE just bring in data from URL: /create/:category/, /create/ edit/
		// - dispatch action .addPost(post), but how to send to the right page after?
	}

	render() {
		const currentPost = this.props.posts[this.props.match.params.id];
		const currentCategory = currentPost ? currentPost.category : this.props.match.params.category;
		return (
			<Route render={({history}) => (
				<CreateEdit history={history} post={currentPost} category={currentCategory} handleSubmit={this.handleSubmit} />
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
