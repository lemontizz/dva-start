import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Menu from '../Menu/Menu';
import Nav from '../Nav/Nav';
import styles from './Layout.less';
import routes from '../Menu/MenuRoutes';

const Layout = ({
	dispatch
}) => {
	return (
		<Router>
			<div className={styles['page-wrapper']}>
				<Nav></Nav>
				<Menu></Menu>
				<div className="page-cont">
					{routes.map((route, index) => (
			          <Route
			            key={index}
			            path={route.path}
			            exact={route.exact}
			            component={route.main()}
			          />
			        ))}
				</div>
			</div>
		</Router>
	);
};

export default Layout;