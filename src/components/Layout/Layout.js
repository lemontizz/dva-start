import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Menu from '../Menu/Menu';
import Nav from '../Nav/Nav';
import styles from './Layout.less'; 
import AboutUs from '../../routes/AboutUs/AboutUs';
import Products from '../../routes/Products/Products';
import UserManage from '../../routes/UserManage/UserManage';

const Layout = ({
	dispatch
}) => {
	return (
		<Router>
			<div className={styles['page-wrapper']}>
				<Nav></Nav>
				<Menu></Menu>
				<Route path="/Products" component={Products} />
		    	<Route path="/UserManage" component={UserManage} />
			</div>
		</Router>
	);
};

export default Layout;