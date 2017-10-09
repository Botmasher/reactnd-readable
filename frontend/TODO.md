# Readable TODO list

## Planning
- [ ] sketch out data flow through the app
	- [ ] review project specifications and decide how to break out UI components
	- [ ] shape of the store, accounting for normalization
	- [ ] store actions and reducers
	- [ ] store middleware, thunk, ...
	- [ ] relations between components
	- [ ] state that will live in each component
- [ ] decide on a directory structure
	- [ ] by categ2ory vs by feature
	- [ ] consider number of components, their complexity and their dependencies
- [ ] update README to reflect decisions from the planning stage

## Basic Tasks
- [ ] install and save Redux
- [ ] create a Redux store in index.js

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
- [ ] implement distinct user objects/models
- [ ] custom favicon