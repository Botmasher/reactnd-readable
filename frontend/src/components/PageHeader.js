import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function PageHeader(props) {
	const titleInitial = props.title.substr(0,1);
	const titleRest = props.title.substr(1);
	return (
		<div className="page-header">
			<h1 className="logo"><Link to="/"><div className="decorated-initial">{titleInitial}</div>{titleRest}</Link></h1>
		</div>
	);
}

PageHeader.propTypes = {
	title: PropTypes.string.isRequired
};

export default PageHeader;
