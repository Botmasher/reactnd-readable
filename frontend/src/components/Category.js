import React from 'react';

function Category(props) {
	return (
		<div>
		Category View - identical to the default view, but 
		filtered to only include posts with the selected category.
		
		Type: 	presentation, receive data from App component
		
		Props:  - category title/info
						- posts in this category
						- handler to change category (or just links?)
						- handler to change sorting

		State: 	- sort criterion and sort order (use props / selector instead?)

		Selectors: 	- all of the titles and maybe authors for currently viewed posts

		Link: 	- to other categories/home
						- to individual post
						- add post?
		
		</div>
	);
}

export default Category;
