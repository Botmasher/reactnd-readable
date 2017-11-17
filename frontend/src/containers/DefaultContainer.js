import React from 'react';
import { connect } from 'react-redux';
import Default from '../components/Default';
import CategoriesList from '../components/CategoriesList';
import { selectCategories, selectCategoryPosts, selectPostsSortedAlpha, selectPostsSortedNum } from '../selectors';
import { readCategories, readPosts, votePost } from '../actions';
import { sortPosts } from '../utils/sort';

class DefaultContainer extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {sort: {property: 'default', ascending: false}};
	}

	componentDidMount() {
		this.props.readPosts();
		this.props.readCategories();
	}
	
	handleSortPosts = (optionValue) => {
		this.setState(sortPosts(optionValue));
	};

	render() {
		const { posts } = this.props;
		// optimally do this in action creator
		let sortedPosts;
		if (!this.state.sort.property || this.state.sort.property==='default') {
			sortedPosts = Object.values(posts);
		} else if (this.state.sort.property==='title' || this.state.sort.property==='body') {
			sortedPosts = this.props.selectPostsSortedAlpha({posts, ...this.state.sort})
		} else {
			sortedPosts = this.props.selectPostsSortedNum({posts, ...this.state.sort});
		}
		return (
			<div className="default-container">
				<CategoriesList categories={this.props.selectCategories({categories: this.props.categories})} />
				<Default
					posts={sortedPosts}
					comments={this.props.comments}
					sortPosts={this.handleSortPosts}
				/>
			</div>
		);
	}
}

function mapStateToProps({ posts, comments, categories }) {
	return {
		posts,
		comments,
		categories,
		selectCategories: selectCategories,
		selectCategoryPosts: selectCategoryPosts,
		selectPostsSortedNum: selectPostsSortedNum,
		selectPostsSortedAlpha: selectPostsSortedAlpha
	};
}

function mapDispatchToProps(dispatch) {
	return {
		readPosts: () => dispatch(readPosts()),
		readCategories: () => dispatch(readCategories()),
		votePost: (postId, up) => dispatch(votePost(postId, up))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(DefaultContainer);
