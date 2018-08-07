import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { connect } from 'dva';
import Layout from '../../components/Layout/Layout';

class IndexPage extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div>
				<Layout></Layout>
			</div>
		)
	}
}

export default IndexPage;