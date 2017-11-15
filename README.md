# Readable

## Overview
This is my final project for the Udacity Redux course as part of the React Nanodegree program. This project was created on top of the [local backend development server](https://github.com/udacity/reactnd-project-readable-starter) and bootsrapped with [Create React App](https://github.com/facebookincubator/create-react-app). Readable is an app where users can leave posts and comments. You can post content to categories, comment on posts, vote on posts and comments, and edit and delete posts and comments.

## Getting Started
Here's how to start up this project for the first time:
1. ensure that `node` and `npm` are installed
2. fork, clone or download this repository
3. install and start the local backend server
    - navigate to project root
    - `cd api-server`
    - `npm install`
4. use another shell window to install the frontend
    - navigate to project root
    - `cd frontend`
    - `npm install`
5. start the backend server within the `./api-server` directory
    - `node server.js`
6. start the frontend server within the `./frontend` directory
    - `npm start`

Once installed, you only need to navigate to and start the two servers in the future:
1. for the backend: open `./api-server` and start the server with `node server.js`
2. for the frontend: open `./frontend` and start the app with `npm start`

### What am I installing?
This project was built in React with Redux and has the following dependencies:
- Node and npm
- React
- Redux: `redux` and `react-redux`
- Router: `react-router-dom`
- Middleware: `redux-thunk`
- Selectors: `reselect`
- UUID generator: `uuid`

## Data structure
The data was structured with the following core activities in mind:
- user can CRUD own comment
- user can CRUD own post
- user can R any post not flagged as deleted
- user can R any comment where comment not flagged as deleted and parent post not flagged as deleted
- user can U any comment's voteScore where comment not flagged as deleted and parent post not flagged as deleted
- user can U any post's voteScore where post not flagged as deleted
Because the backend does not store users, the.

Store data is built around three basic objects from the backend:
- categories
- posts: each post belongs to one category
- comments: each comment belongs to one parent post

Reselect selectors are used to build on the store data.

### Shape of the store
The top-level shape of the store for reducers reflects the above breakdown between posts, comments and categories:
```
{
  posts: {},
  comments: {},
  categories: {}
}
```

Each category in `categories` has the following structure:
```
[id]: {
  name: '',
  path: ''
}
```
Case: what if category exists in categories on server and exists in no fetched post or comment?

Each post in the `posts` object has the following structure:
```
[uuid]: {
  id: '',                 // unique string identifier
  timestamp: Date.now(),  // default Unix time track data
  title: '',              // string to display as the post title
  body: '',               // string to display as the post body
  author: '',             // string to display as the author of post title and body
  category: '',           // must be one of the categories provided by server
  voteScore: 1,           // net votes post has received (default: 1)
  deleted: false          // flag for deleted post
}
```

Each comment in the `comments` array has the following structure:
```
[uuid]: {
  id: '',                 // unique string identifier
  parentId: '',           // matches id of an existing post
  timestamp: Date.now(),  // default Unix time track data
  body: '',               // string to display as the comment body
  author: '',             // string to display as the author of comment body
  category: '',           // matches parent category
  voteScore: 1,           // net votes comment has received (default: 1)
  deleted: false,         // flag for deleted comment
  parentDeleted: false    // flag for deleted parent post
}
```

### Shape of the backend
An API server is available for local development and testing. There are three types of objects stored on the server:
- Categories
- Posts
- Comments

Being a single-page app with a router, frontend endpoints differ from the backend. For example, where the frontend takes in `/:category/:post_id` to direct the user to a post's details, the local RESTful API employs `GET /posts/:id`.

For more information on endpoints, usage and required parameters, see the [documentation](https://github.com/Botmasher/reactnd-readable/blob/master/api-server/README.md) in the `./api-server` subdirectory.

## Tasks and ideas
Check out the task planning and implementation checklist in the project's [TODO.md](https://github.com/Botmasher/reactnd-readable/blob/master/frontend/TODO.md).

## Frontend Architecture

### Components
Following the [project rubric](https://review.udacity.com/#!/rubrics/1017/view), this application was initially developed with four views in mind: root, category, post detail, create/edit and post/comment. These aim to fulfill the following expectations from Udacity.

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

#### Post/Comment UI
Posts and comments, in all views where they are displayed, should display their current score and should have controls to increment or decrement the voteScore for the object. Posts should display the number of comments associated with the post.

### Component breakdown
The React frontend is divided into display components (`./frontend/src/components`) - either stateless functional or controlled - and container components (`./frontend/src/containers`) that connect to the Redux store.

### Utils
Additional functions have been written and stored within `./frontend/src/utils`, crucially including functions that fetch backend routes.

## Contributing
If you'd like to add a feature or fix an error in this app, you may fork the repository and make a pull request with your updates. First, please consult the constraints mentioned in my previous course project's [CONTRIBUTING.md](https://github.com/Botmasher/reactnd-myreads/blob/master/CONTRIBUTING.md), since they're also relevant here.
