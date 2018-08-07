import request from '../../scripts/request';

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
				focusEl: key
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
	},
	effects: {
		*submit(action, {call, put, select}) {
			let username = yield select(state => state.username),
				password = yield select(state => state.password);

			if(!username) {
				yield put({type: 'login/'})
			}
			
			yield console.log('action', action);
			yield console.log('call', call);
			yield console.log('put', put);

			request({
				url: '/test'
			});
		}
	}
}