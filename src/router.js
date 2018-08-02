import React from 'react';
import {
	Router,
	Route,
	Switch
} from 'dva/router';
import IndexPage from './routes/IndexPage/IndexPage';
import AboutUs from './routes/AboutUs/AboutUs';
import Products from './routes/Products/Products';
import Login from './routes/Login/Login';

function RouterConfig({
	history
}) {
	return (
		<Router history={history}>
			<Switch>
		        <Route path="/" exact component={IndexPage} />
		        <Route component={NoMatch} />
		    </Switch> 
	    </Router>
	);
};

const NoMatch = () => ({
	location
}) => (
	<div>
		<h3>No Match for <code>{location.pathname}</code> .</h3>
	</div>
);

export default RouterConfig;