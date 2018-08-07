import * as loginService from '../../services/login';

let methods = {
	*validate(action, {call, put, select}) {
		console.log('[[[')
		let username = yield select(state => state.username),
			password = yield select(state => state.password);

		if(!username) {
			yield put({
				type: 'toggleUserNameTip',
				payload: true
			});
			return false;
		}
		if(!password) {
			yield put({
				type: 'togglePasswordTip',
				payload: true
			});
			return false;
		}
		return true;
	}
};

export default {
	namespace: 'login',
	state: {
		focusEl: '',
		username: '',
		password: '',
		showUsernameTip: false,
		showPasswordTip: false
	},
	reducers: {
		focus(state, {payload: key}) {
			return {
				...state,
				focusEl: key,
				showUsernameTip: false,
				showPasswordTip: false
			}
		},
		blur(state, {payload: flag}) {
			console.log('~!', this);
			return {
				...state,
				focusEl: ''
			}
		},
		setValue(state, {payload: params}) {
			console.log('params', params);
			return {
				...state,
				[params.key]: params.value
			}
		},
		toggleUserNameTip(state, {payload: flag}) {
			return {
				...state,
				showUsernameTip: flag
			}
		},
		togglePasswordTip(state, {payload: flag}) {
			return {
				...state,
				showPasswordTip: flag
			}
		} 
	},
	effects: {
		*submit(action, {call, put, select}) {
			let result = yield call(loginService.login, {
				username: yield select(state => state.username),
				password: yield select(state => state.password)
			});
			console.log('999999');
			console.log(result);
			yield console.log(2222222);
		}
	}
}