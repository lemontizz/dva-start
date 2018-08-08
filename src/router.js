import React from 'react';
import {
	Router,
	Route,
	Switch,
	Link
} from 'dva/router';
import IndexPage from './routes/IndexPage/IndexPage';
import Login from './routes/Login/Login';
import Register from './routes/Register/Register';
import Home from './routes/Home/Home';
import Prompt from './components/Layer/Prompt';

function RouterConfig({
	history
}) {
	return (
		<Router history={history}>
			<div>
				<Prompt></Prompt>
				<Route path="/" exact component={IndexPage} />
				<Route path="/Home" exact component={IndexPage} />
		        <Route path="/Login" component={Login} />
		        <Route path="/Register" component={Register} />
			</div>
	    </Router>
	);
};

export default RouterConfig;


