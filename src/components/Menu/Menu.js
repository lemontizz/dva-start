import React from 'react';
import PropTypes from 'prop-types';
import {
	Link
} from "react-router-dom";

const Menu = ({
	data
}) => {
	return (
		<div className="page-nav">
			<ul>
				<li><Link to="/Home">Home</Link></li>
				<li><Link to="/AboutUs">AboutUs</Link></li>
				<li><Link to="/Products">ProductList</Link></li>
			</ul>
		</div>
	)
};


export default Menu;