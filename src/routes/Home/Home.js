import React from 'react';
import { Router, Route, Link } from 'react-router-dom';
import {
	connect
} from 'dva';
import Layout from '../../components/Layout/Layout';
import Login from '../Login/Login';

const Home = ({
	dispatch
}) => {
	return (
		<div>
			<h2>Home page</h2>
		</div>
	);
};

export default connect(({
	home
}) => ({
	home
}))(Home);