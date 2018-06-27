var http = require('http');
var fs = require('fs');

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

http.createServer(function(request, response){
	var url = request.url;
	switch(url) {
		case '/':
			getStaticFileContent(response, 'home.html', 'text/html');
			break;
		case '/about':
			getStaticFileContent(response, 'about.html', 'text/html');
			break;
		case '/contact':
			getStaticFileContent(response, 'contact.html', 'text/html');
			break;
		default:
			response.writeHead(404, {'Content-Type':'text/plain'});
			response.end('404 - Page not found.');

	}
}).listen(port);


function getStaticFileContent(response, filepath, contentType){
	fs.readFile(filepath, function(error, data){
		console.log(filepath);
			if(error) {
				console.log(error);
				response.writeHead(500,{'Content-Type':'text/plain'});
				response.end('500 - Internal Server Error.');
			}
			if(data){
				response.writeHead(200,{'Content-Type':'text/html'})
				response.end(data);
			}
		});
}
