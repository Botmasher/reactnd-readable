import React from 'react';
import { connect } from 'react-redux';
import Category from '../components/Category';
import CategoriesList from '../components/CategoriesList';
import { selectCategories, selectCategoryPosts, selectPostsSortedAlpha, selectPostsSortedNum } from '../selectors';
import { readCategories, readCategoryPosts, votePost } from '../actions';
import { sortPosts } from '../utils/sort';

class CategoryContainer extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {sort: {property: 'default', ascending: false}};
	}

	componentDidMount() {
		this.props.readCategories();
		this.props.readCategoryPosts(this.props.match.params.category);
	}

	handleSortPosts = (optionValue) => {
		this.setState(sortPosts(optionValue));
	};

	render() {
		const category = this.props.match.params.category;
		let posts = this.props.selectCategoryPosts({posts: this.props.posts, category});
		// optimally do this in action creator
		if (!this.state.sort.property || this.state.sort.property==='default') {
			posts = Object.values(posts);
		} else if (this.state.sort.property==='title' || this.state.sort.property==='body') {
			posts = this.props.selectPostsSortedAlpha({posts, ...this.state.sort})
		} else {
			posts = this.props.selectPostsSortedNum({posts, ...this.state.sort});
		}
		return (
			<div className="category-posts-container">
				<CategoriesList categories={this.props.selectCategories({categories: this.props.categories})} />
				<Category
					category={category}
					posts={posts}
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
		readCategories: () => dispatch(readCategories()),
		readCategoryPosts: (category) => dispatch(readCategoryPosts(category)),
		votePost: (postId, up) => dispatch(votePost(postId, up))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer);
