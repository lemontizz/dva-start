import dva from 'dva';
import createLoading from 'dva-loading';
import './index.css';

// 1. Initialize
// const app = dva();
const app = dva({
	initialState: {
		products: [{
			name: 'dva',
			id: 1
		}, {
			name: 'antd',
			id: 2
		}],
		menu: [{
			name: 'AboutUs',
			path: '/AboutUs'
		}, {
			name: 'Home',
			path: '/Home'
		}, {
			name: 'Login',
			path: '/Login'
		}]
	}
});

// 2. Plugins
// app.use({});
app.use(createLoading({
	namespace: 'loading'
}));

// 3. Model
// app.model(require('./models/example').default);
app.model(require('./models/menu/menu').default);
app.model(require('./models/products/products').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');