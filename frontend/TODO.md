# Readable TODO List

## Planning
- [X] sketch out data flow through the app
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
	- [X] lay out the shape the store, accounting for normalization
	- [X] plan store reducers
		- [X] sketch what a post reducer should do when adding
		- [X] sketch what a post reducer should do when editing
		- [X] sketch what a post reducer should do when voting
		- [X] sketch what a post reducer should do when deleting
		- [X] sketch what a comment reducer should do when adding
		- [X] sketch what a comment reducer should do when editing
		- [X] sketch what a comment reducer should do when voting
		- [X] sketch what a comment reducer should do when deleting
	- [X] plan store actions
		- [X] sketch actions for post
		- [X] sketch actions for comment
		- [X] sketch actions for category
	- [X] write util to fetch and update API data
		- [X] save in ./src/utils
		- [X] store headers and address in single location
		- [X] basic fetch func that allows setting method and body headers fields
		- [X] test using funcs to load data in the main app
		- [X] build vote funcs on top
		- [X] build add funcs on top
		- [X] build read one entry funcs on top
		- [X] build edit funcs on top
		- [X] build delete funcs on top - TEST CURR ARROW
		- [X] build out async actions to leverage each function
	- [X] DRY up async action creators
	- [X] set up middleware for async actions
	- [X] test ability to store and access data
		- [X] App component: dispatch actions with correct payload
		- [X] actions: fill out actions to make API calls
		- [X] actions: fill out actions to format and pass along payload
		- [X] log: check the store state after reducer resolves
		- [X] actions: update and fix issues as you test
		- [X] reducers: update and fix issues as you test
	- [X] fill out reducers to account for all actions
	- [X] mimic store shape in API: posts.js {'postId':{postObject},} pairs instead of arrays
	- [X] plan [selectors](https://github.com/reactjs/reselect) to build on state
- [X] plan out UI
	- [X] directory structure: by category vs by feature (consider component complexity and dependency)
	- [X] inventory of view components
	- [X] relations between components
	- [X] props and state that will live in each component
	- [X] consider events that should CRUD data, e.g. adding post, updating score
- [X] update README to reflect decisions from the planning stage

## Core Tasks
- [X] install and save Redux
- [X] create a Redux store in index.js
- [X] update the Redux store to match the sketch above
	- [X] check and test against what's in the API
	- [X] implement actions
	- [X] implement reducers
- [X] check that Redux dataflow works correctly
	- [X] each of the events that should CRUD data from Planning above
	- [X] include displaying posts sorted by timestamp, voteScore (at a minimum)
- [X] build out basic components for each of the four views in README.md Specifications
	- [X] Root view
	- [X] Category view
	- [X] Post Detail view
	- [X] Create/Edit view
- [X] Comments UI
	- [X] list comments
	- [X] handle create
	- [X] handle update
	- [X] handle delete
- [X] Prop types
- [X] Routing between components
	- [X] withRouter around app connect so router links fire when clicked
	- [X] decisions about handling [url params](http://redux.js.org/docs/advanced/UsageWithReactRouter.html#containersvisibletodolistjs) and passing [link state](https://stackoverflow.com/questions/41466055/how-do-i-pass-state-through-react-router) (category, post id)
	- [X] get post, comment, category id through URL
- [X] build out supporting components for post and comment UI
	- [X] Post UI
	- [X] Comment UI
- [X] wire up views to display data correctly
	- [X] use component state to handle form input fields and controlled components for posts
	- [X] use component state to handle form input fields and controlled components for comments
	- [X] otherwise use your reducers to control the rest of your data
	- [X] mapPropsToState and mapDispatchToState
- [X] break components into smaller pieces
	- [X] identify needed [container components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) and [split](https://gist.github.com/chantastic/fc9e3853464dffdb1e3c) from presentation components
	- [X] break out sort menu and posts listing
	- [X] comments with controls as displayed in Post Detail view
	- [X] post as displayed in Root view, Category view and Post Detail view
- [X] style the app to be "presentable and easy to navigate"
- [X] switch catch 404 routes
- [X] update README to reflect changes during core task implementation

## Testing
- [X] install React devtools
- [X] install Redux devtools
	- [X] include extension in index.js createStore
	- [X] compose to use Thunk async middleware enhancer
- [X] Set up your IDE including syntax highlighting [for JS and JSX](https://packagecontrol.io/packages/Babel)
- [ ] Consider [React test utilities](https://reactjs.org/docs/test-utils.html)
- [ ] Plan to write [Redux tests](http://redux.js.org/docs/recipes/WritingTests.html)
- [ ] Test your selectors, actions, reducers [together](https://github.com/reactjs/redux/issues/1171)
	- [ ] the [ducks approach](https://github.com/reactjs/reselect#motivation-for-memoized-selectors)
- [ ] Hot loading and time traveling

## Feedback from Udacity
Project reviewed November 15, 2017.
A few comments, odds and ends:
- consistently apply prop type validations to enforce data type checking for each React component. Doing so is good practice when working with dynamic Javascript. An alternative would be to use Typescript or statically typed Javascript.
- [ ] this submission's code structure can be further improved to reduce redundant/repeated code (i.e. sorting posts in the render() method). The oddly named [Ducks Methodology](https://medium.com/@scbarrus/the-ducks-file-structure-for-redux-d63c41b7035c) (Re-ducks?!) can help you out. This is an alternative to structuring the single monolith `/src/actions/index.js` file:
	1. create the action types/constants in a separate file if possible. Here's a great post explaining why on StackOverflow: https://stackoverflow.com/questions/34965856/what-is-the-point-of-the-constants-in-redux
	2. break the single-monolith-file into separate files by feature (e.g. commentActions.js, postActions.js, etc)
	3. utilize the Ducks Methodology to modularize the entire application's code structure, as explained in the review's opening comments.
- try not to nest ternary operators as they confuse human eyes,
- some components designated as containers can be created as stateless components. This package might be useful for future React/Redux projects: https://github.com/acdlite/recompose
- [X] Follow the code structure convention for React components:
	1. constructor,
	2. lifecycle methods,
	3. custom methods,
	4. render method.
- [ ] Nested ternaries here can be cleaned up by branching before rendering or (optimally) in the action creator:
	- [ ] CategoryContainer.js
	- [ ] DefaultContainer.js
	- [ ] PostDetailContainer.js
- [X] destructure props before rendering for leaner components
- [X] declare variables with let and const outside of the switch-statements of a reducer
	- lexical declaration is [visible in the entire switch block](https://eslint.org/docs/rules/no-case-declarations) but only initialized when assigned!
- [X] use destructuring rather than straight assignment with props
	- e.g. `const { posts } = this.props` instead of `const posts = this.props.posts`
- good job separating out helper methods, but keep this up!

## Beyond MVP
- [X] custom favicon
- [X] truncate (clamp) mobile categories list beyond certain width
- [X] truncate category and post names
- [X] ADD_POST and EDIT_POST: push category path to history rather than using category name stored in the post.category
- [X] add category and author links to post brief
- [ ] enhance sorting menu placement and interface
- [ ] pagination for posts and comments lists
- [ ] localization including dates
- [ ] user care
	- [ ] implement distinct user objects/models for logging in and permissions
	- [ ] author profile
	- [ ] view posts by author
- [ ] ways of building and organizing UI
	- [ ] Grommet or other for component UI
	- [ ] go all the way to [build a component library](https://hackernoon.com/building-a-react-component-library-part-1-d8a1e248fe6c)
	- [ ] Dynamically change out links with [FilterLink](http://redux.js.org/docs/advanced/UsageWithReactRouter.html#navigating-with-react-router)
- [X] backend ability to manage (add, edit, delete) categories
	- [X] **troubleshoot** category pages no longer fetch posts
- [ ] make better use of categories
	- [X] allow adding, editing and deleting from backend
	- [X] expose backend functions to api server.js
	- [X] wrap calls in utils api.js
	- [X] add reducers to crud categories
	- [X] add actions to crud categories
	- [X] test add, edit, delete a category through frontend component
	- [ ] categories ui
		- [ ] container to manage categories
		- [ ] categories list to display categories
		- [ ] implement sorting select for categories
- [X] store route strings separately
- [ ] add sorting for comments as well within Post Detail view
- [ ] consider [immutability](http://redux.js.org/docs/recipes/UsingImmutableJS.html)
- [ ] test and optimize for growth in data, cases where iterating over huge numbers of posts and comments
	- [ ] how well does the shape of your store account for big data fetching, mapping, filtering, reducing?
	- [ ] how to increase performance?
	- [ ] sorting and other calculations done on large API responses handled through backend endpoint
- [ ] edited comments display notice that they've been edited
	- [ ] keep original timestamp
	- [ ] label and timestamp the edit (requires backend changes - wait until graded)
- [ ] search posts and comments
	- [ ] search all comments on all posts vs current API fetching comments for one post
