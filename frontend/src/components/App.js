import React from 'react';
import { connect } from 'react-redux';
import TestAPI from './TestAPI';
import { readPosts, readComments } from '../actions'
import { Route } from 'react-router-dom';

class App extends React.Component {

	componentDidMount() {
		this.props.readPosts();
		this.props.readComments('8xf0y6ziyjabvozdd253nd');
	}

	render() {
		console.log(this.props);
		return (
			<div>
				<Route render={() => (
					<TestAPI displayThesePosts={this.props.posts} all={false} posts={false} comments={false} />
				)} />
			</div>
		);
	}
}

function mapStateToProps({ posts, comments }) {
	return { posts, comments };
}

function mapDispatchToProps(dispatch) {
	return {
		readPosts: () => dispatch(readPosts()),
		readComments: (postId) => dispatch(readComments(postId))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
