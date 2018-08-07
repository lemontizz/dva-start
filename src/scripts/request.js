let defaultOpts = {
	url: '',
	method: 'get',
	contentType: 'application/json',
	headers: {},
	alertErrorInfo: true,
	showLoading: true,
	data: {}
};

let request = function(options) {
	let opts = Object.assign({}, defaultOpts, options),
		params,
		xhr, 
		promise;

		promise = new Promise(function(resolve, reject) {
			xhr = new XMLHttpRequest();

			xhr.open(opts.method, opts.url, true);

			xhr.onload = function(response) {
				let data = response,
					status = xhr.status;

				try {
					data = JSON.parse(data);
				} catch(e) {
					console.log('can not parse response info');
				}

				if(status >= 200 && status < 400) {
					resolve({data, response, xhr});
				} else {
					console.error('status Code is:' + status, opts.url, data, response);
				}
			};

			xhr.onerror = function(response) {
				console.log('error', opts.url);
			};

			xhr.timeout = function() {
				console.log('ajax timeout', opts.url)
			};
		});

		promise.xhr = xhr;

		return promise;
};

export default request;