import React from 'react';
import {
	Router,
	Route,
	Switch
} from 'dva/router';
import IndexPage from './routes/IndexPage/IndexPage';
import Login from './routes/Login/Login';
import Register from './routes/Register/Register';

function RouterConfig({
	history
}) {
	return (
		<Router history={history}>
			<div>
		        <Route path="/" exact component={IndexPage} />
		        <Route path="/Login" component={Login} />
		        <Route path="/Register" component={Register} />
			</div>
	    </Router>
	);
};

export default RouterConfig;