export default {
	namespace: 'globalUser',
	state: {
		user: null
	},
	reducers: {
		setUser(state, {payload: data}) {
			return {
				...state,
				user: data
			}
		},
	}
}