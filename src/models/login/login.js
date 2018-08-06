export default {
	namespace: 'login',
	state: {
		focusEl: ''
	},
	reducers: {
		focus(state, {payload: key}) {
			console.log('focus2');
			// state.focusEl = key;
			return {
				...state,
				focusEl: key
			}
		},
		blur(state, {payload: flag}) {
			console.log('blur');
			// state.focusEl = flag;
			return {
				...state,
				focusEl: ''
			}
		},
		'remove'(state, {payload: name}) {
			return state.filter(item => item.name !== name)
		}
	}
}