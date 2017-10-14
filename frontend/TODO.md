# Readable TODO list

## Planning
- [ ] sketch out data flow through the app
	- [X] review project specifications for data and view/UI components
	- [X] confidently CRUD posts through the API
		- [X] test getting posts and categories from API
		- [X] test creating a post through the API
		- [X] test updating a post through the API
		- [X] test voting on a post through the API
		- [X] test deleting a post through the API 
	- [X] confidently CRUD comments through the API
		- [X] test getting comments from the API
		- [X] test creating a comment through the API
		- [X] test updating a comment through the API
		- [X] test voting on a comment through the API
		- [X] test deleting a comment through the API
	- [ ] lay out the shape the store, accounting for normalization
	- [ ] store actions and reducers
	- [ ] store middleware, thunk, ...
	- [ ] relations between components
	- [ ] state that will live in each component
- [ ] what are the events that should CRUD data, e.g. adding post, updating score
	- [ ] include displaying sorted by: category, timestamp, title, author, voteScore
- [ ] decide on a directory structure
	- [ ] by category vs by feature
	- [ ] consider number of components, their complexity and their dependencies
- [ ] update README to reflect decisions from the planning stage

## Core Tasks
- [X] install and save Redux
- [X] create a Redux store in index.js
- [ ] update the Redux store to match the sketch above
	- [ ] check and test against what's in the API
	- [ ] implement actions
	- [ ] implement reducers
- [ ] check that Redux dataflow works correctly
	- [ ] each of the events that should CRUD data from Planning above
	- [ ] include displaying posts sorted by 
- [ ] build out basic components for each of the four views in README.md Specifications
	- [ ] Root view
	- [ ] Category view
	- [ ] Post Detail view
	- [ ] Create/Edit view
- [ ] build out basic components for post and comment UI
	- [ ] Post UI
	- [ ] Comment UI
- [ ] wire up views to display data correctly
	- [ ] use component state to handle form input fields and controlled components
	- [ ] otherwise use your reducers to control the rest of your data
	- [ ] mapPropsToState and mapDispatchToState
- [ ] break subcomponents into smaller pieces
	- [ ] comments with controls as displayed in Post Detail view
	- [ ] post as displayed in Root view, Category view and Post Detail view
- [ ] style the app to be "presentable and easy to navigate"

## Testing
- [X] install React devtools
- [X] install Redux devtools
	- [ ] include extension in index.js createStore
	- [ ] compose to use Thunk or async middleware enhancer
- [X] Set up your IDE including syntax highlighting [for JS and JSX](https://packagecontrol.io/packages/Babel)
- [ ] Consider [React test utilities](https://reactjs.org/docs/test-utils.html)
- [ ] Plan to write [Redux tests](http://redux.js.org/docs/recipes/WritingTests.html)
- [ ] Hot loading and time traveling

## Beyond MVP
- [ ] implement distinct user objects/models for logging in and permissions
- [ ] ability to create categories
- [ ] add sorting for comments as well within Post Detail view
- [ ] custom favicon
- [ ] search posts and comments