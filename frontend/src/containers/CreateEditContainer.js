import React from 'react';
import { connect } from 'react-redux';
import CreateEdit from '../components/CreateEdit';
import { readPost, addPost } from '../actions';
import { Route } from 'react-router-dom';

class CreateEditContainer extends React.Component {

	handleSubmit = (event, newPostState, history) => {
		event.preventDefault();
		
		const newPost = {...newPostState};

		// fill in unchanged edited post info from store
		Object.keys(newPost).map(postProperty => {
			newPost[postProperty] = !newPost[postProperty] && this.props.match.params.id
				? this.props.posts[this.props.match.params.id][postProperty]
				: newPost[postProperty]
			;
		});

		const isCreated = !this.props.posts[this.props.match.params.id];
		const isBlank = Object.values(newPostState).filter(value => value !== '').length === 0;
		const isMissingInfo = Object.values(newPostState).filter(value => value === '').length > 0;

		console.log(newPost);

		if (isCreated) {
			this.props.addPost(postState);
		//	const postId = // the return value from that operation!
		//	history.push(`/posts/${postId}`);
		} else if (isBlank) {
			// nothing to do
		} else {
			// this.props.editPost(this.props.match.params.id, postState);
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
			)}>
		);
	}
}


function mapStateToProps({ posts, comments }) {
	return { posts, comments };
}

function mapDispatchToProps(dispatch) {
	return {
		readPost: (postId) => dispatch(readPost(postId)),
		addPost: () => dispatch(addPost())
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateEditContainer);
