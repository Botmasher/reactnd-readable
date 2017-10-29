import React from 'react';
import { Link } from 'react-router-dom';

function Category(props) {
	return (
		<div>
			{props.posts.length > 0
				? <h1>Posts in {props.category}</h1>
				: <h2>no posts in {props.category}</h2>
			}
			<div>
				<select onChange={(e) => props.sortPosts(e.target.value)}>
					<option value="timestamp-desc">newest to oldest</option>
					<option value="timestamp-asc">oldest to newest</option>
					<option value="voteScore-desc">highest rated</option>
					<option value="voteScore-asc">lowest rated</option>
					<option value="title-asc">by title (A-Z)</option>
					<option value="title-desc">by title (Z-A)</option>
				</select>
				<button>time</button><button></button><button></button>
			</div>
			<ul>
				{props.posts.map(post => (
					<li key={post.id}><Link to={`/posts/${post.id}/`}>{post.title}</Link></li>
				))}
			</ul>
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
