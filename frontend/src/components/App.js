import React from 'react';
import PageHeader from './PageHeader';
import PostDetailContainer from '../containers/PostDetailContainer';
import DefaultContainer from '../containers/DefaultContainer';
import CreateEditContainer from '../containers/CreateEditContainer';
import CategoryContainer from '../containers/CategoryContainer';
import PageNotFound from './PageNotFound';
import { Switch, Route } from 'react-router-dom';
import '../App.css';

function App() {
	return (
		<div>
			<PageHeader title="Readable" />
			<div className="content-wrapper">
				<Switch>
					<Route exact path="/:category?/create" component={CreateEditContainer} />
					<Route exact path="/:category/:id/edit" component={CreateEditContainer} />
					<Route exact path="/:category/:id" component={PostDetailContainer} />
					<Route exact path="/:category" component={CategoryContainer} />
					<Route exact path="/" component={DefaultContainer} />
					<Route component={PageNotFound} />
				</Switch>
			</div>
		</div>
	);
}

export default (App);
