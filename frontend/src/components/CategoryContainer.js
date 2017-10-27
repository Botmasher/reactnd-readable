import React from 'react';
import { connect } from 'react-redux';
import Category from './Category';
import { selectCategoryPosts, selectPostsSortedAlpha, selectPostsSortedNum } from '../selectors';
import { readPosts, readCategoryPosts, addPost } from '../actions';

class CategoryContainer extends React.Component {
	
	componentDidMount() {
		this.props.readCategoryPosts(this.props.match.params.category);
	}

	render() {
		return (
			<Category category={this.props.match.params.category} posts={Object.values(this.props.posts)} />
		);
	}
}

function mapStateToProps({ posts, comments }) {
	return {
		// store
		posts,
		comments,
		// selectors
		selectCategoryPosts: selectCategoryPosts,
		selectPostsSortedNum: selectPostsSortedNum,
		selectPostsSortedAlpha: selectPostsSortedAlpha
	};
}

function mapDispatchToProps(dispatch) {
	return {
		readPosts: () => dispatch(readPosts()),
		readCategoryPosts: (category) => dispatch(readCategoryPosts(category)),
		addPost: (post) => dispatch(addPost(post))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer);
