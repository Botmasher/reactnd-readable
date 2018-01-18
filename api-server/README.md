# API Server

This simple backend server manages posts, comments and categories for my Readable app. The original server was inherited from the [ Udacity Readable starter project](https://github.com/udacity/reactnd-project-readable-starter) and heavily modified in January 2018 to extend categories operations.

## Installing the Server
To install and start the API server, run the following commands in this directory:

* `npm install`
* `node server`

## Using the Server

### Include an Authorization Header

All requests should use an **Authorization header** to work with your own data:

```js
fetch(
	url,
  {
    headers: { 'Authorization': 'whatever-you-want' }
  }
);
```

### API Endpoints

The following endpoints are available:

| Endpoints       | Usage          | Params         |
|-----------------|----------------|----------------|
| `GET /categories` | Get all of the categories available for the app. List is found in `categories.js`. Feel free to extend this list as you desire. |  |
| `GET /:category/posts` | Get all of the posts for a particular category. |  |
| `GET /posts` | Get all of the posts. Useful for the main page when no category is selected. |  |
| `POST /posts` | Add a new post. | **id** - UUID should be fine, but any unique id will work <br> **timestamp** - [Timestamp] Can in whatever format you like, you can use `Date.now()` if you like. <br> **title** - [String] <br> **body** - [String] <br> **author** - [String] <br> **category** -  Any of the categories listed in `categories.js`. Feel free to extend this list as you desire. |
| `GET /posts/:id` | Get the details of a single post. | |
| `POST /posts/:id` | Used for voting on a post. | **option** - [String]: Either `"upVote"` or `"downVote"`. |
| `PUT /posts/:id` | Edit the details of an existing post. | **title** - [String] <br> **body** - [String] |
| `DELETE /posts/:id` | Sets the deleted flag for a post to 'true'. <br> Sets the parentDeleted flag for all child comments to 'true'. | |
| `GET /posts/:id/comments` | Get all the comments for a single post. | |
| `POST /comments` | Add a comment to a post. | **id** - Any unique ID. As with posts, UUID is probably the best here. <br> **timestamp** - [Timestamp] Get this however you want. <br> **body** - [String] <br> **author** - [String] <br> **parentId** - Should match a post id in the database. |
| `GET /comments/:id` | Get the details for a single comment. | |
| `POST /comments/:id` | Used for voting on a comment. | |
| `PUT /comments/:id` | Edit the details of an existing comment. | **timestamp** - timestamp. Get this however you want. <br> **body** - [String] |
| `DELETE /comments/:id` | Sets a comment's deleted flag to `true`. | &nbsp; |

## Specification
The server is currently seeded with a small number of categories and posts.

### Categories
Categories are objects containing a name, a URL path (currently expected by the frontend to be the same string) and a displayName. The `name` is also used as the associative index for that object. The inherited server lacked methods for creating/modifying/deleting these categories. These operations were added to the backend and tested from the frontend.

### Posts
Posts are the building blocks of the application. Each post is assigned to one category. Posts include:

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
Each comment is attached to a parent post. They include:

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

This application is anonymous, with no authentication or authorization. There are no user objects, and comments and posts accept any username for creation and editing.

The server is very light weight. It performs zero data validation to enforce the above data types. Make sure you are using the correct types when sending requests to the server.