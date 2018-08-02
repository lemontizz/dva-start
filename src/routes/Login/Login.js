import React from 'react';
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
			<form>
				<div>
					<label>Username：<input type="text" /></label>
				</div>
				<div>
					<label>Password：<input type="text" /></label>
				</div>
				<div>
					<button>Login</button>
				</div>
			</form>
		</div>
	)
}

export default Login;