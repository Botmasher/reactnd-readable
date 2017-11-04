import React from 'react';
import { connect } from 'react-redux';
import Category from '../components/Category';
import { selectCategoryPosts, selectPostsSortedAlpha, selectPostsSortedNum } from '../selectors';
import { readCategoryPosts } from '../actions';

function sortPosts(optionValue) {
	const [property, ascDesc] = optionValue.split('-');
	return (state) => (
		{sort: {property, ascending: ascDesc==='asc' ? true : false}}
	);
}

class CategoryContainer extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {sort: {property: '', ascending: false}};
	}

	handleSortPosts = (optionValue) => {
		this.setState(sortPosts(optionValue));
	};

	componentDidMount() {
		this.props.readCategoryPosts(this.props.match.params.category);
	}

	render() {
		const category = this.props.match.params.category;
		const posts = this.props.selectCategoryPosts({posts: this.props.posts, category});
		return (
			<Category
				category={category}
				posts={
					!this.state.sort.property
						? Object.values(posts)
						: this.state.sort.property==='title' || this.state.sort.property==='body'
							? this.props.selectPostsSortedAlpha({posts, ...this.state.sort})
							: this.props.selectPostsSortedNum({posts, ...this.state.sort})
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
		readCategoryPosts: (category) => dispatch(readCategoryPosts(category))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer);
