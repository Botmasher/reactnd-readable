import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound(props) {
	return (
		<div className="error-block">
			<p className="error-code">404</p>
			<p className="error-text">Post not found!</p>
			<p className="error-text">Check out featured <Link to="/">posts and categories</Link>.</p>
		</div>
	);
}

export default PageNotFound;
