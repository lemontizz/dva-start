import request from '../scripts/request';
// import request from '../utils/request';

export function login(data) {
	console.log('service login');

	// return request('/api/users', {
	// 	method: 'POST',
	// 	body: data
	// });

	try {
		return request({
		  	url: '/login',
		  	method: 'POST',
		  	data: JSON.stringify(data)
	  	})
	} catch(e) {
		return e;
	}
}
