import React from 'react';
import TestAPI from './TestAPI';

function App(props) {
	return (
		<TestAPI all={true} posts={false} comments={true} />
	);
}

export default App;
