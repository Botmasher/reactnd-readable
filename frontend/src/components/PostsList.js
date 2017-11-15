import React from 'react';
import PostDetailContainer from '../containers/PostDetailContainer';
import PropTypes from 'prop-types';

function PostsList(props) {
	return (
		<div className="posts-list">
			<ul>
				{props.posts.map(post => (
					<PostDetailContainer key={post.id} seedPost={post} />
				))}
			</ul>
		</div>
	);
}

PostsList.propTypes = {
	posts: PropTypes.array.isRequired
};

export default PostsList;
