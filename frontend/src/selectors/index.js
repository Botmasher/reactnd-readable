import { createSelector } from 'reselect';

const postsSelector = state => Object.values(state.posts);
const commentsSelector = state => Object.values(state.comments);
const categoriesSelector = state => Object.values(state.categories);
const postIdSelector = state => state.post.id;
const categorySelector = state => state.category;
const propertySelector = state => state.property;
const ascendingSelector = state => state.ascending;

export const selectCurrentCategories = createSelector(
	postsSelector,
	posts => posts.reduce((categories, post) => (
		categories.includes(post.category) ? categories : [...categories, post.category]
	), [])
);

export const selectCurrentComments = createSelector(
	[commentsSelector, postIdSelector],
	(comments, postId) => comments.filter(comment => comment.parentId === postId)
);

export const selectCategoryPosts = createSelector(
	[postsSelector, categorySelector],
	(posts, category) => posts.reduce((categoryPosts, post) => (
		post.category === category ? [...categoryPosts, post] : categoryPosts
	), [])
);

export const selectCategories = createSelector(
	categoriesSelector,
	categories => categories
);

export const selectPostsSortedNum = createSelector(
	[postsSelector, propertySelector, ascendingSelector],
	(posts, property, ascending) => (
		ascending
			? posts.sort((a, b) => a[property]-b[property])
			: posts.sort((a, b) => b[property]-a[property])
	)
);

export const selectPostsSortedAlpha = createSelector(
	[postsSelector, propertySelector, ascendingSelector],
	(posts, property, ascending) => (
		ascending
			? posts.sort((a, b) => a[property] === b[property] ? 0 : a[property] > b[property] ? 1 : -1)
			: posts.sort((a, b) => a[property] === b[property] ? 0 : a[property] < b[property] ? 1 : -1)
	)
);
