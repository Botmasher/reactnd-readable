import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { truncate } from '../utils/truncate';

function CategoriesList({ categories }) {
	const maxNameLength = 9;
	return (
		<div className="categories-list">
			<h2>Categories:</h2>
			<ul className="clamped-mobile-line">
				<li>
					<Link to="/">
						<div className="decorated-initial">A</div>ll
					</Link>
				</li>
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

export default CategoriesList;
