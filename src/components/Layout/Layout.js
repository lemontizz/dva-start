import React from 'react';
import {
	connect
} from 'dva';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch
} from "react-router-dom";
import Menu from '../Menu/Menu';
import Nav from '../Nav/Nav';
import Home from '../../routes/Home/Home';
import AboutUs from '../../routes/AboutUs/AboutUs';
import Products from '../../routes/Products/Products';
import Login from '../../routes/Login/Login';
import styles from './Layout.less';


const routes = [{
	path: '/Home',
	main: () => Home
}, {
	path: '/AboutUs',
	main: () => AboutUs
}, {
	path: '/Products',
	main: () => Products
}];

const Layout = ({
	dispatch
}) => {
	return (
		<Router>
			<div className={styles['page-wrapper']}>
				<Nav></Nav>
				<Menu></Menu>
				<hr />
				<div class="page-cont">
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