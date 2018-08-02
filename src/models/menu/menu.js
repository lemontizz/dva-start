export default {
	namespace: 'menu',
	state: [],
	reducers: {
		'remove'(state, {payload: name}) {
			return state.filter(item => item.name !== name)
		}
	}
}