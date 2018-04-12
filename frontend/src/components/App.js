import React from 'react';
import PageHeader from './PageHeader';
import PostDetailContainer from '../containers/PostDetailContainer';
import DefaultContainer from '../containers/DefaultContainer';
import CreateEditContainer from '../containers/CreateEditContainer';
import CategoryContainer from '../containers/CategoryContainer';
import AuthorContainer from '../containers/AuthorContainer';
import PageNotFound from './PageNotFound';
import { Switch, Route } from 'react-router-dom';
import routes from '../routes';
import '../App.css';

const App = () => (
	<div>
		<PageHeader title="Readable" />
		<div className="content-wrapper">
			<Switch>
				<Route exact path={routes.author} component={AuthorContainer} />
				<Route exact path={routes.create} component={CreateEditContainer} />
				<Route exact path={routes.edit} component={CreateEditContainer} />
				<Route exact path={routes.post} component={PostDetailContainer} />
				<Route exact path={routes.category} component={CategoryContainer} />
				<Route exact path={routes.home} component={DefaultContainer} />
				<Route component={PageNotFound} />
			</Switch>
		</div>
	</div>
);

export default (App);
