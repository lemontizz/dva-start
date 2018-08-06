import dva from 'dva';
import createLoading from 'dva-loading';
import './index.css';
import './styles/font-awesome.css';

// 1. Initialize
// const app = dva();
const app = dva({
	initialState: {
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
app.model(require('./models/login/login').default);
app.model(require('./models/products/products').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');