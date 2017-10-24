import { createSelector } from 'reselect';

const postsSelector = (state) => Object.values(state.posts);
const commentsSelector = (state) => Object.values(state.comments);
const postIdSelector = (state) => state.post.id;
const categorySelector = (state) => state.category;

export const selectCurrentCategories = createSelector(
	postsSelector,
	posts => posts.reduce((categories, post) => (
		categories.includes(post.category) ? categories : [...categories, post.category]
	), [])
);

export const selectCurrentComments = createSelector(
	[commentsSelector, postIdSelector],
	(comments, postId) => comments.reduce((postComments, comment) => (
		comment.parentId===postId ? [...postComments, comment] : postComments
	), [])
);

export const selectCategoryPosts = createSelector(
	[postsSelector, categorySelector],
	(posts, category) => posts.reduce((categoryPosts, post) => (
		post.category===category ? [...categoryPosts, post] : categoryPosts
	), [])
);
