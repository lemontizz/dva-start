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
	let methods = {
		focus(key) {
			dispatch({
				type: 'login/focus',
				payload: key
			});
		},
		blur(flag) {
			dispatch({
				type: 'login/blur',
				payload: flag
			});
		}
	};

	return (
		<div>
			<div className="register-head">
		        <div className="text">Thank you for logging in {login.focusEl} </div>
		    </div>
		    <div className="register-body" id="login-body">
		        <h2>Login FED</h2>
		        <div className="form-item">
		            <div className="textbox">
		                <input type="text" autoComplete="off" onFocus={() => methods.focus('username')} onBlur={() => methods.blur('')} id="username" max="18" />
		            </div>
		            <label className={`label ${login.focusEl == 'username' ? 'top' : ''}`}>Username / Email</label>
		        </div>
		        <div className="form-item">
		            <div className="textbox">
		                <input type="password" autoComplete="off" onFocus={() => methods.focus('password')} onBlur={() => methods.blur('')} id="password" max="18" />
		            </div>
		            <label className={`label ${login.focusEl == 'password' ? 'top' : ''}`}>Password</label>
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

export default connect(({
	login
}) => ({
	login
}))(Login);