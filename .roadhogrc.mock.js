
export default {
	'GET /api/users': { users: [{ username: 'admin' }] },
	'POST /api/users': (req, res) => { res.end('OK'); },
};
