var http = require('http');
var fs = require('fs');

http.createServer(function(request, response){
	var url = request.url;
	switch(url) {
		case '/':
			getStaticFileContent(response, 'public/home.html', 'text/html');
			break;
		case '/sessions':
			getStaticFileContent(response, 'public/sessions.html', 'text/html');
			break;
		case '/hits':
			getStaticFileContent(response, 'public/hits.html', 'text/html');
			break;
		case '/questions':
			getStaticFileContent(response, 'public/questions.html', 'text/html');
			break;
		case '/leaderboard':
			getStaticFileContent(response, 'public/leaderboard.html', 'text/html');
			break;
		case '/suggestions':
			getStaticFileContent(response, 'public/suggestions.html', 'text/html');
			break;
		case '/search':
			getStaticFileContent(response, 'public/search.html', 'text/html');
			break;
		case '/profile':
			getStaticFileContent(response, 'public/profile.html', 'text/html');
			break;
		case '/profile-edit':
			getStaticFileContent(response, 'public/profile-edit.html', 'text/html');
			break;
		default:
			response.writeHead(404, {'Content-Type':'text/plain'});
			response.end('404 - Page not found.');

	}
}).listen(9099);
console.log('server running at http://localhost:9099');


function getStaticFileContent(response, filepath, contentType){
	fs.readFile(filepath, function(error, data){
			if(error) {
				response.writeHead(500,{'Content-Type':'text/plain'});
				response.end('500 - Internal Server Error.');
			}
			if(data){
				response.writeHead(200,{'Content-Type':'text/html'})
				response.end(data);
			}
		});
}
