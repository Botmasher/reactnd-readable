# Readable

## Overview
This is my final project for the Udacity Redux course as part of the React Nanodegree program. This project was created on top of the [local backend development server](https://github.com/udacity/reactnd-project-readable-starter) and bootsrapped with [Create React App](https://github.com/facebookincubator/create-react-app). The project will be "a content and comment web app. Users will be able to post content to predefined categories, comment on their posts and other users' posts, and vote on posts and comments. Users will also be able to edit and delete posts and comments."

## Motivation
From Udacity: This content and comment structure is common across a large number of websites and applications, from news sites to blogs to aggregators like Hacker News and Reddit. By building this project, you will gain an understanding of how Redux can function in a standard type of application.

## Getting Started
For the backend: open `./api-server` and start the server with `node server.js`

For the frontend: open `./frontend` and start the app with `npm start`

This project was built in React with Redux and has the following dependencies:
- Node and npm
- React
- Redux: `redux` and `react-redux`
- Router: `react-router-dom`
- Middleware: `redux-thunk`
- UUID generator: `uuid`

## Notes
This document should be filled out during project planning. Currently included below is the project specification from Udacity.

### Data structure
- user can CRUD own comment
- user can CRUD own post
- user can R any post not flagged as deleted
- user can R any comment where comment not flagged as deleted and parent post not flagged as deleted
- user can U any comment's voteScore where comment not flagged as deleted and parent post not flagged as deleted
- user can U any post's voteScore where post not flagged as deleted

#### Shape of the store
The top-level shape of the store for reducers:
```{
	posts: [],
	comments: []
}```

Categories are not duplicated in the store. Although they can be read through a dedicated API endpoint, for the frontend they can be obtained by reducing over posts and comments. The existing API returns for **categories** have the following structure:
```{
	name: '',
	path: ''
}```
Case: what if category exists in categories on server and exists on no post or comment?

Each post in the `posts` array has the following structure:
```{
	id: '', 				// unique string identifier
	timestamp: Date.now(), 	// default Unix time track data
	title: '', 				// string to display as the post title
	body: '', 				// string to display as the post body
	author: '', 			// string to display as the author of post title and body
	category: '', 			// must be one of the categories provided by server
	voteScore: 1, 			// net votes post has received (default: 1)
	deleted: false 			// flag for deleted post
}```

Each comment in the `comments` array has the following structure:
```{
	id: '', 				// unique string identifier
	parentId: '', 			// matches id of an existing post
	timestamp: Date.now(), 	// default Unix time track data
	body: '', 				// string to display as the comment body
	author: '', 			// string to display as the author of comment body
	category: '', 			// matches parent category
	voteScore: 1,			// net votes comment has received (default: 1)
	deleted: false, 		// flag for deleted comment
	parentDeleted: false 	// flag for deleted parent post
}```

### Possible ideas and pitfalls
- Another student (@zarian) was marked off for not using `/:category/:post_id` to grab the post details, while in the local API it says to use `GET /posts/:id    Get the details of a single post.` Is the first the client API while the latter is the server API?
- Keep rendering components and container components apart so that components connected to store are separate from rendering logic (@hbk)
- Grommet wonderful for component UI (@david responding to @sobbuh)
- Go all the way to [publishing your own component library](https://hackernoon.com/building-a-react-component-library-part-1-d8a1e248fe6c)

## Specification

### Data
There are three types of objects stored on the server:
- Categories
- Posts
- Comments

### Categories
The server supports a small, fixed number of categories that users can put posts into. Categories are simple objects containing a name and a URL path (usually the same string). The server does not have methods for creating/modifying/deleting these categories. If you wish to add to the categories for your app, simply add your desired object to the Array in `categories.js` in the provided server.

### Posts
Posts are the building blocks of your application. Posts include:

Attribute | Type     | Description
---       | ---      | ---
id        | String   | Unique identifier
timestamp | Integer  | Time created - default data tracks this in Unix time. You can use `Date.now()` to get this number
title     | String   | Post title
body      | String   | Post body
author    | String   | Post author
category  | String   | Should be one of the categories provided by the server
voteScore | Integer  | Net votes the post has received (default: 1)
deleted   | Boolean  | Flag if post has been 'deleted' (inaccessible by the front end), (default: false)

### Comments
Comments are attached to parent posts. They include:

Attribute | Type     | Description
---       | ---      | ---
id        | String   | Unique identifier
parentId  | String   | id of the parent post
timestamp | Integer  | Time created - default data tracks this in Unix time. You can use Date.now() to get this number
body      | String   | Comment body
author    | String   | Comment author
voteScore | Integer  | Net votes the comment has received (default: 1)
deleted   | Boolean  | Flag if comment has been 'deleted' (inaccessible by the front end), (default: false)
parentDeleted | Boolean | Flag for when the the parent post was deleted, but the comment itself was not.

This application is anonymous, with no authentication or authorization. There are no user objects, and comments and posts accept any username/name for creation and editing.

The server is very light weight. It performs zero data validation to enforce the above data types. Make sure you are using the correct types when sending requests to the server.

### Views
Your application should have, at a minimum, four views:

#### Default (Root)
- should list all available categories, which should link to a category view for that category
- should list all of the posts ordered by voteScore (highest score first)
- should have a control for changing the sort method for the list, including at minimum, order by voteScore and order by timestamp
- should have a control for adding a new post

#### Category View
- identical to the default view, but filtered to only include posts with the selected category

#### Post Detail View
- should show the details of a post, including: Title, Body, Author, timestamp (in user readable format), and vote score
- should list all of the comments for that post, ordered by voteScore (highest first)
- should have controls to edit or delete the post
- should have a control to add a new comment.
- implement comment form however you want (inline, modal, etc.)
- comments should also have controls for editing or deleting

#### Create/Edit View
- should have a form to create new post or edit existing posts
- when editing, existing data should be populated in the form

### Post/Comment UI
Posts and comments, in all views where they are displayed, should display their current score and should have controls to increment or decrement the voteScore for the object. Posts should display the number of comments associated with the post.

### Backend
The API server is available for local development and testing. For more information on endpoints, usage and required parameters, see the [documentation](https://github.com/Botmasher/reactnd-readable/blob/master/api-server/README.md) in the `./api-server` subdirectory.

### Specific Requirements
Use React to build your application UI. Remember that composition is key. It’s rarely a mistake to break a component into smaller pieces. Look for opportunities to reuse your components. We recommend using create-react-app to bootstrap your project, but it is not required for this project.

While the focus (and specification) of this project is based on functionality, rather than styling, please ensure that your app is presentable and easy to navigate.

Use Redux to manage your application state. This includes all user actions and responses from the API server. You may use component state to handle form input fields and controlled components. Otherwise, the rest of the state for your application should be controlled by your reducers.