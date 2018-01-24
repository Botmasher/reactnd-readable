import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Categories({ categories }) {
	const maxNameLength = 8;
	return (
		<div className="categories">
			<h2>Categories:</h2>
			<ul>
				{categories.map(category => (
					<li key={category.path}>
						<Link to={`/${category.path}`}>
							<div className="decorated-initial">{category.name.substr(0,1)}</div>
							{truncate(category.name)(maxNameLength).substr(1)}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

CategoriesList.propTypes = {
	categories: PropTypes.array.isRequired
};

export default Categories;
