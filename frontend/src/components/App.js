import React from 'react';
import PageHeader from './PageHeader';
import PostDetailContainer from '../containers/PostDetailContainer';
import DefaultContainer from '../containers/DefaultContainer';
import CreateEditContainer from '../containers/CreateEditContainer';
import PageNotFound from './PageNotFound';
import { Switch, Route } from 'react-router-dom';
import '../App.css';

function App() {
	return (
		<div>
			<PageHeader title="Readable" />
			<div className="content-wrapper">
				<Switch>
					<Route exact path="/post/create/:category?" component={CreateEditContainer} />
					<Route exact path="/post/:id/edit" component={CreateEditContainer} />
					<Route exact path="/post/:id" component={PostDetailContainer} />
					<Route exact path="/:category?" component={DefaultContainer} />
					<Route component={PageNotFound} />
				</Switch>
			</div>
		</div>
	);
}

export default (App);
