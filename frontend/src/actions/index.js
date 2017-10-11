export const ADD_POST = 'ADD_POST';
export const ADD_COMMENT = 'ADD_COMMENT';

export function addPost({ id, timestamp, title, body, author, category }) {
	return {
		type: ADD_COMMENT,
		id,
		timestamp,
		title,
		body,
		author,
		category
	}
}

export function addComment({ id, parentId, timestamp, body, author, category }) {
	return {
		type: ADD_COMMENT,
		id,
		parentId,
		timestamp,
		body,
		author,
		category
	}
}

