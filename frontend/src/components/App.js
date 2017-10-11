import React from 'react';

function App(props) {
	const categories=[];
	const api_address='http://localhost:3001';
	fetch(`${api_address}/categories/`, { headers:
		{
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Authorization': 'token-m8bmSr10tx9'
		}
	})
	.then(response => response.json())
	.then((data) => {
		data.categories.map((category) => {
			console.log(category);
			categories.push(category);
			return category;
		});
	});
	console.log(categories); 	// note how this 
	return (
		<div>Happiness shall live on in this code!</div>
	);
}

export default App;
