import React from 'react';
import { connect } from 'react-redux';
import Default from './Default';
import { selectCategoryPosts, selectPostsSortedAlpha, selectPostsSortedNum } from '../selectors';
import { readPosts, addPost } from '../actions';

function sortPosts(optionValue) {
	const [property, ascDesc] = optionValue.split('-');
	return (state) => (
		{sort: {property, ascending: ascDesc==='asc' ? true : false}}
	);
}

class DefaultContainer extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {sort: {property: '', ascending: false}};
	}

	handleSortPosts = (optionValue) => {
		this.setState(sortPosts(optionValue));
	};

	componentDidMount() {
		this.props.readPosts();
	}

	render() {
		return (
			<Category
				category={this.props.match.params.category}
				posts={
					!this.state.sort.property
						? Object.values(this.props.posts)
						: this.state.sort.property==='title' || this.state.sort.property==='body'
							? this.props.selectPostsSortedAlpha({posts: this.props.posts, ...this.state.sort})
							: this.props.selectPostsSortedNum({posts: this.props.posts, ...this.state.sort})
				}
				sortPosts={this.handleSortPosts}
			/>
		);
	}
}

function mapStateToProps({ posts, comments }) {
	return {
		posts,
		comments,
		selectCategoryPosts: selectCategoryPosts,
		selectPostsSortedNum: selectPostsSortedNum,
		selectPostsSortedAlpha: selectPostsSortedAlpha
	};
}

function mapDispatchToProps(dispatch) {
	return {
		readPosts: () => dispatch(readPosts()),
		addPost: (post) => dispatch(addPost(post))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer);
