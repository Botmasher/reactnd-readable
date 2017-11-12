import React from 'react';
import { connect } from 'react-redux';
import Category from '../components/Category';
import Default from '../components/Default';
import CategoriesList from '../components/CategoriesList';
import { selectCategories, selectCategoryPosts, selectPostsSortedAlpha, selectPostsSortedNum } from '../selectors';
import { readCategories, readPosts, readCategoryPosts, votePost } from '../actions';

function sortPosts(optionValue) {
	const [property, ascDesc] = optionValue.split('-');
	return (state) => (
		{sort: {property, ascending: ascDesc==='asc' ? true : false}}
	);
}

class DefaultContainer extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {sort: {property: 'default', ascending: false}};
	}

	handleSortPosts = (optionValue) => {
		this.setState(sortPosts(optionValue));
	};

	componentDidMount() {
		this.props.match.params.category
			? this.props.readCategoryPosts(this.props.match.params.category)
			: this.props.readPosts();
		;
		this.props.readCategories();
	}

	render() {
		const category = this.props.match.params.category ? this.props.match.params.category : null;
		const posts = category ? this.props.selectCategoryPosts({posts: this.props.posts, category}) : this.props.posts;
		return (
			<div>
			{category
				? <div className="category-posts-container">
						<Category
							category={category}
							posts={
								!this.state.sort.property || this.state.sort.property==='default'
									? Object.values(posts)
									: this.state.sort.property==='title' || this.state.sort.property==='body'
										? this.props.selectPostsSortedAlpha({posts, ...this.state.sort})
										: this.props.selectPostsSortedNum({posts, ...this.state.sort})
							}
							comments={this.props.comments}
							sortPosts={this.handleSortPosts}
						/>
					</div>
				: <div className="default-container">
						<CategoriesList categories={this.props.selectCategories({categories: this.props.categories})} />
						<Default
							posts={
								!this.state.sort.property || this.state.sort.property==='default'
									? Object.values(posts)
									: this.state.sort.property==='title' || this.state.sort.property==='author'
										? this.props.selectPostsSortedAlpha({posts, ...this.state.sort})
										: this.props.selectPostsSortedNum({posts, ...this.state.sort})
							}
							comments={this.props.comments}
							sortPosts={this.handleSortPosts}
						/>
					</div>
			}
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
		readCategoryPosts: (category) => dispatch(readCategoryPosts(category)),
		votePost: (postId, up) => dispatch(votePost(postId, up))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(DefaultContainer);
