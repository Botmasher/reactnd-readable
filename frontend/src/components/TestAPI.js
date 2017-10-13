import React from 'react';
import TestAPIPosts from './TestAPIPosts';
import TestAPICategories from './TestAPICategories';

function TestAPI(props) {
	const api_address='http://localhost:3001';
	const headers = {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
		'Authorization': 'token-m8bmSr10tx9'
	};

	return(
		<div>
			<TestAPICategories api_address={api_address} headers={headers} />
			<TestAPIPosts api_address={api_address} headers={headers} pleaseDelete={true} />
		</div>
	);
}

export default TestAPI;
