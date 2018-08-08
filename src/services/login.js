import request from '../scripts/request';
// import request from '../utils/request';

export function login(data) {
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
