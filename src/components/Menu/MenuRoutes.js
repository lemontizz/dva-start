import Home from '../../routes/Home/Home';
import AboutUs from '../../routes/AboutUs/AboutUs';
import Products from '../../routes/Products/Products';
import UserManage from '../../routes/UserManage/UserManage';
import Login from '../../routes/Login/Login';

export default [{
	path: '/Home',
	main: () => Home
}, {
	path: '/AboutUs',
	main: () => AboutUs
}, {
	path: '/Products',
	main: () => Products
}, {
	path: '/UserManage',
	main: () => UserManage
}];