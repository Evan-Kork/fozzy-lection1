var url = 'https://newsapi.org/v2/everything?' +
					'q=Apple&' +
					'from=2018-08-03&' +
					'sortBy=popularity&' +
					'apiKey=67d28e8b42b84f17b264e55ed5515ab7';

var req = new Request(url);

fetch(req)
		.then(function(response) {
			console.log(response.json());
		})