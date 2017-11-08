import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function PageHeader(props) {
	return (
		<div className="page-header">
			<h1 className="logo">Readable!</h1>
			<ul>
				<li><Link to="/">all</Link></li>
				{props.categories.map(category => (
					<li key={category}><Link to={`/${category}`}>{category}</Link></li>
				))}
			</ul>
		</div>
	);
}

PageHeader.propTypes = {
	categories: PropTypes.array.isRequired
};

export default PageHeader;
