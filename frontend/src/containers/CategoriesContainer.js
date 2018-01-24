import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Categories from '../components/Categories';
import { selectCategories } from '../selectors';
import { readCategories, addCategory, editCategory, deleteCategory } from '../actions';

class CategoriesContainer extends React.Component {
	
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.readCategories();
	}

	handleSortPosts = (optionValue) => {
		this.setState(sortPosts(optionValue));
	};

	testAddCategory = (history) => {
		const category = {name: 'good-one', path: 'good-one', displayName: 'Good One'};
		this.props.addCategory(category, history);
	};

	testEditCategory = (history) => {
		const category = {name: 'good-one', path: 'good-one', displayName: 'Better One'};
		this.props.editCategory(category, history);
	};

	testDeleteCategory = (history) => {
		const category = {name: 'good-one', path: 'good-one'}; 	// NOTE: disallow editing cat name here
		this.props.deleteCategory(category.name, history);
	};
	
	render() {
		const { categories } = this.props;
		const categoryName = this.props.match.params.category; 	// treats path as name - currently they MUST be identical
		const category = categories[categoryName];
		return (
			<Route render={({history}) => (
				<div className="categories-container">
					<Categories categories={categories} />
				</div>
			)} />
		);
	}
}

function mapStateToProps({ posts, comments, categories }) {
	return {
		posts,
		comments,
		categories,
		selectCategories: selectCategories
	};
}

function mapDispatchToProps(dispatch) {
	return {
		readCategories: () => dispatch(readCategories()),
		addCategory: (details, history) => dispatch(addCategory(details, history)),
		editCategory: (details, history) => dispatch(editCategory(details, history)),
		deleteCategory: (categoryName, history) => dispatch(deleteCategory(categoryName, history))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesContainer);
