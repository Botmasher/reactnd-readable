import React from 'react';
import TestAPI from './TestAPI';
import { Route } from 'react-router-dom';

function App(props) {

	const strange_array = ['asdf', '123', 'gwarg', 'something_else', 'wibbidietsagguiddy', 'long_with_variables?q=happy&l=waaaah'];
	
	return (
		<div>
			<TestAPI all={false} posts={false} comments={false} />
			<Route render={({history}) => (
				<button type="button" onClick={() => { history.push(`/${strange_array[Math.floor(Math.random()*(strange_array.length))]}`) }}>Go sumwherz</button>
			)} />
		</div>
	);
}

export default App;
