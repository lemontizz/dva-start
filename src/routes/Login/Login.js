import React from 'react';
import { NavLink } from 'react-router-dom';
import {
	connect
} from 'dva';
import style from './Login.css';

const Login = ({
	dispatch,
	login
}) => {

	return (
		<div>
			<div className="register-head">
		        <div className="text">Thank you for logging in</div>
		    </div>

		    <div className="register-body" id="login-body">
		        <h2>Login FED</h2>
		        <div className="form-item">
		            <div className="textbox">
		                <input type="text" id="username" max="18" />
		            </div>
		            <label className="label">Username / Email</label>
		        </div>
		        <div className="form-item">
		            <div className="textbox">
		                <input type="password" id="password" max="18" />
		            </div>
		            <label className="label">Password</label>
		        </div>
		        <div className="form-btn">
		            <button id="submit"><i className="fa fa-spinner fa-pulse fa-fw icon"></i>Submit</button>
		        </div>
		        <div className="info">
		            No account, <NavLink to="/Register" className="text-link">register</NavLink> one
		        </div>
		    </div>
		</div>
	)
}

export default Login;