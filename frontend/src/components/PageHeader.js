import React from 'react';
import { Link } from 'react-router-dom';

function PageHeader(props) {
	return (
		<div className="page-header">
			<h1 className="logo">Readable!</h1>
			<ul>
				<li><Link to="/">all</Link></li>
				<li><Link to="/react">react</Link></li>
				<li><Link to="/redux">redux</Link></li>
			</ul>
		</div>
	);
}

export default PageHeader;
