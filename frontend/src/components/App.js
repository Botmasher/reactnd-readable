import React from 'react';
import TestAPI from './TestAPI';
import { Route } from 'react-router-dom';

function App(props) {
	return (
		<div>
			<Route render={() => {
				<TestAPI all={false} posts={false} comments={false} />
			}}/>
		</div>
	);
}

export default App;
