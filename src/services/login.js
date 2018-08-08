import request from '../scripts/request';
// import request from '../utils/request';

export function login(data) {
	console.log('service login', data);

	// return request('/login', {
	// 	method: 'POST',
	// 	headers: {
	// 		"Content-Type": "application/json" 
	// 	},
	// 	body: JSON.stringify(data)
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
