import React from 'react';
import { connect } from 'react-redux';
import Category from './Category';
import { selectCategoryPosts, selectPostsSortedAlpha, selectPostsSortedNum } from '../selectors';
import { readPosts, readCategoryPosts, addPost } from '../actions';

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

	// sortPosts = (optionValue) => {
	// 	const options = optionValue.split('-');
	// 	this.setState({sort: {property: options[0], ascending: options[1]==='asc' ? true : false}});
	// };

	// sortPostsAlpha = (property="title", ascending=true) => {
	// 	//
	// };

	// sortPostsNum = (property="timestamp", ascending=false) => {
	// 	this.props.selectPostsSortedNum({posts: this.props.posts, property, ascending});
	// };

	handleSortPosts = (optionValue) => {
		this.setState(sortPosts(optionValue));
	};

	componentDidMount() {
		this.props.match.params.category
			? this.props.readCategoryPosts(this.props.match.params.category)
			: this.props.readPosts();
		;
	}

	render() {
		console.log("Rerunning container");
		// next get it to sort variably instead of only alpha 
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
