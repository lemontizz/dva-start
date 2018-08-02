export default {
	namespace: 'products',
	state: [],
	reducers: {
		'delete'(state, {payload: id}) {
			console.log('models products delete :', state, id);
			return state.filter(item => item.id !== id);
		}
	}
}