import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'dva';
import style from './Login.css';
import Tip from '../../components/Layer/Tip';
import * as loginService from '../../services/login';
import request from '../../scripts/request';

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
		},
		changeUsername(key, value) {
			dispatch({
				type: 'login/setValue', 
				payload: {
					key, value
				}
			});
		},
		validate() {
			let username = login.username,
				password = login.password;

			if(!username) {
				dispatch({
					type: 'login/toggleUserNameTip',
					payload: true
				});
				return false;
			}
			if(!password) {
				dispatch({
					type: 'login/togglePasswordTip',
					payload: true
				});
				return false;
			}
			return true;
		},
		async submit() {
			// let result = await request({
			//   	url: '/api/login',
			//   	method: 'POST',
			//   	data: JSON.stringify({username: 'xx', password: 'ww'})
			// });
			// let result = await loginService.login({username: 'xx', password: 'xxx'})


			if(!methods.validate()) return;
			
			dispatch({
				type: 'login/submit'
			});
		}
	};

	return (
		<div>
			<div className="register-head">
		        <div className="text">Thank you for logging in </div>
		    </div>
		    <div className="register-body">
		        <h2>Login FED</h2>
		        <div className="form-item" id="username-item">
		            <div className="textbox">
		                <input  type="text" autoComplete="off" max="18" 
		                	id="username"
		                	ref={(input) => {this.usernameInput = input;}}
		                	onFocus={() => methods.focus('username')} 
		                	onBlur={() => methods.blur('')} 
		                	onChange={e => methods.changeUsername('username', e.target.value)}
		                 />
		                 <Tip text={'请输入用户名'} show={login.showUsernameTip} id="username"></Tip>
		            </div>
		            <label className={`label ${login.focusEl == 'username' || login.username.length ? 'top' : ''}`}>Username / Email</label>
		        </div>
		        <div className="form-item">
		            <div className="textbox">
		                <input refs="password" type="password" autoComplete="off" max="18" 
		                	id="password"
		                	ref={(input) => {this.passwordInput = input;}}
		                	onFocus={() => methods.focus('password')} 
		                	onBlur={() => methods.blur('')} 
		                	onChange={e => methods.changeUsername('password', e.target.value)}
		                 />
		                 <Tip text={'请输入密码'} show={login.showPasswordTip} id="password"></Tip>
		            </div>
		            <label className={`label ${login.focusEl == 'password' || login.password.length ? 'top' : ''}`}>Password</label>
		        </div>
		        <div className="form-btn">
		            <button onClick={methods.submit}><i className="fa fa-spinner fa-pulse fa-fw icon"></i>Submit</button>
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