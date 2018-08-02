import React from 'react';
import styles from './Nav.css';
import PropTypes from 'prop-types';

const Nav = ({
	data
}) => {
	return (
		<nav className="page-nav manage clearfix">
			<div className="logo">
				<span className="windmill fa-spin"></span>
				<span className="triangle"></span>
			</div>
			<ul className="nav-left">
				<li>Welcome, username</li>
			</ul>
			<ul className="nav-right">
				<li>
					<a href="/account" className="btn btn-default">
						<span className="icon fa fa-magic"></span>
						<span className="text">My manage</span>
					</a>
				</li>
				<li>
					<a href="/upload-project" className="btn btn-primary">
						<span className="icon fa fa-cloud-upload"></span>
						<span className="text">Upload project</span>
					</a>
				</li>
				<li><a href="/logout" className="text-link">logout</a></li>
			</ul>
		</nav>
	);
};

export default Nav;