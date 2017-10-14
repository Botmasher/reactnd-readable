import React from 'react';
import TestAPIPosts from './TestAPIPosts';
import TestAPICategories from './TestAPICategories';
import TestAPIComments from './TestAPIComments';

function TestAPI(props) {
	const api_address='http://localhost:3001';
	const headers={
		'Accept': 'application/json',
		'Content-Type': 'application/json',
		'Authorization': 'token-m8bmSr10tx9'
	};
	const uuid='somethingunique1234';

	return(
		<div>
			{props.all && (
				<TestAPICategories api_address={api_address} headers={headers} />
			)}
			{props.posts && (
				<TestAPIPosts api_address={api_address} headers={headers} uuid={uuid} pleaseDelete={false} />
			)}
			{props.comments && (
				<TestAPIComments api_address={api_address} headers={headers} uuid={uuid} id={456} pleaseDelete={true} />
			)}
		</div>
	);
}

export default TestAPI;
