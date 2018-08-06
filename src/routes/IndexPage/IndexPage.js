import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import {
  connect
} from 'dva';
import Layout from '../../components/Layout/Layout';
import Products from '../../routes/Products/Products';
import UserManage from '../../routes/UserManage/UserManage';

function IndexPage() {
	return (
		<div>
			<Layout></Layout>
		</div>
	)
}

IndexPage.propTypes = {};

export default connect()(IndexPage);
