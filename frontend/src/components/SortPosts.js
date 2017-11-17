import React from 'react';
import PropTypes from 'prop-types';

function SortPosts (props) {
	const { sortPosts } = props;
	return (
		<select onChange={(e) => sortPosts(e.target.value)}>
			<option value="default">default</option>
			<option value="timestamp-desc">newest to oldest</option>
			<option value="timestamp-asc">oldest to newest</option>
			<option value="voteScore-desc">highest rated</option>
			<option value="voteScore-asc">lowest rated</option>
			<option value="title-asc">by title (A-Z)</option>
			<option value="title-desc">by title (Z-A)</option>
		</select>
	);
}

SortPosts.propTypes = {
	sortPosts: PropTypes.func.isRequired
};

export default SortPosts;
