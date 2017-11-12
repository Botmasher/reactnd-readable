import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function CategoriesList(props) {
	return (
		<div className="categories-list">
			<h2>Categories:</h2>
			<ul>
				<li>
					<Link to="/">
						<div className="decorated-initial">A</div>ll
					</Link>
				</li>
				{props.categories.map(category => (
					<li key={category.path}>
						<Link to={`/${category.path}`}>
							<div className="decorated-initial">{category.name.substr(0,1)}</div>
							{category.name.substr(1)}
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

export default CategoriesList;
