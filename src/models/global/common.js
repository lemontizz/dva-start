export default {
	namespace: 'globalConfig',
	state: {
		prompt: {
			show: false,
			title: '提示',
			text: '',
			cancelText: '取消',
			confirmText: '确认',
			cancelCallback: null,
			confirmCallback: null
		}
	},
	reducers: {
		showPrompt(state, {payload: params}) {
			return {
				...state,
				prompt: Object.assign({
					title: '提示',
					text: '',
					cancelText: '取消',
					confirmText: '确认',
					cancelCallback: null,
					confirmCallback: null
				}, params)
			}
		},
		hidePrompt(state) {
			return {
				...state,
				prompt: Object.assign(state.prompt, {show: false})
			}
		}
	}
}