import React from 'react';
import {
	connect
} from 'dva';
import Layout from '../../components/Layout/Layout';

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