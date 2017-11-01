import React from 'react';
import { connect } from 'react-redux';
import Default from '../components/Default';
import { selectCategoryPosts, selectPostsSortedAlpha, selectPostsSortedNum } from '../selectors';
import { readPosts } from '../actions';

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
			<Default
				posts={
					!this.state.sort.property || this.state.sort.property==='default'
						? Object.values(this.props.posts)
						: this.state.sort.property==='title' || this.state.sort.property==='author'
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
		readPosts: () => dispatch(readPosts())
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(DefaultContainer);
