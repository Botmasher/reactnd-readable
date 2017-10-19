import React from 'react';
import { connect } from 'react-redux';
import TestAPI from './TestAPI';
import { readPosts } from '../actions'
import { Route } from 'react-router-dom';

// methods for hitting the backend
import * as API from '../utils/';

// aciton creators
import { addPost, editPost, votePost, removePost } from '../actions';

class App extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.readPosts();
	}

	render() {
		console.log(this.props);
		return (
			<div>
				<TestAPI displayThesePosts={this.props.posts} all={false} posts={false} comments={false} />
			</div>
		);
	}
}

function mapStateToProps({ posts, comments }) {
	return { posts, comments };
}

function mapDispatchToProps(dispatch) {
	return {
		readPosts: () => dispatch(readPosts())
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
