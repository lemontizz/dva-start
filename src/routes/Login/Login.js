import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'dva';
import style from './Login.css';
import Tip from '../../components/Layer/Tip';

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

		submit() {
			dispatch({
				type: 'login/submit'
			})
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
		                <input type="text" autoComplete="off" max="18" 
		                	id="username"
		                	onFocus={() => methods.focus('username')} 
		                	onBlur={() => methods.blur('')} 
		                	onChange={e => methods.changeUsername('username', e.target.value)}
		                 />
		                 <Tip text={'请输入用户名'} id="username"></Tip>
		            </div>
		            <label className={`label ${login.focusEl == 'username' || login.username.length ? 'top' : ''}`}>Username / Email</label>
		        </div>
		        <div className="form-item">
		            <div className="textbox">
		                <input type="password" autoComplete="off" max="18" 
		                	onFocus={() => methods.focus('password')} 
		                	onBlur={() => methods.blur('')} 
		                	onChange={e => methods.changeUsername('password', e.target.value)}
		                 />
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