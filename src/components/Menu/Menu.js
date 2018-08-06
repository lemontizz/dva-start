import React from 'react';
import styles from './Menu.css';
import {
	NavLink
} from "react-router-dom";

const Menu = ({
	data
}) => {
	return (
		<menu id="page-manage-menu">
			<ul>
				<li>
					<NavLink activeClassName="active" to="/Home">
						<span>Home</span>
					</NavLink>
				</li>
				<li>
					<NavLink activeClassName="active" to="/MyAccount">
						<span>My account</span>
					</NavLink>
				</li>
				<li>
					<NavLink activeClassName="active" to="/MyProject">
						<span>My project</span>
					</NavLink>
				</li>
				<li>
					<NavLink activeClassName="active" to="/UploadProject">
						<span>Upload project</span>
					</NavLink>
				</li>
				<li>
					<NavLink activeClassName="active" to="/UserManage">
						<span>User management</span>
					</NavLink>
				</li>
				<li>
					<NavLink activeClassName="active" to="/Products">
						<span>Project management</span>
					</NavLink>
				</li>
				<li>
					<NavLink activeClassName="active" to="/Login">
						<span>Login</span>
					</NavLink>
				</li>
			</ul>
		</menu>
	)
};


export default Menu;