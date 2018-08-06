import React from 'react';
import styles from './Nav.css';
import { Link } from 'react-router-dom';

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
				<li><a href="#/Login" className="text-link">Login</a></li>
				<li><a href="#/Register" className="text-link">Register</a></li>
			</ul>
			<ul className="nav-right">
				<li>
					<a href="#/Account" className="btn btn-default">
						<span className="icon fa fa-magic"></span>
						<span className="text">My manage</span>
					</a>
				</li>
				<li>
					<a href="#/UploadProject" className="btn btn-primary">
						<span className="icon fa fa-cloud-upload"></span>
						<span className="text">Upload project</span>
					</a>
				</li>
				<li><Link to="/Logout" className="text-link">logout</Link></li>
			</ul>
		</nav>
	);
};

export default Nav;