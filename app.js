var http = require('http');
var fs = require('fs');

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

http.createServer(function(request, response){
	var url = request.url;
	switch(url) {
		case '/':
<<<<<<< HEAD
			getStaticFileContent(response, 'home.html', 'text/html');
			break;
		case '/about':
			getStaticFileContent(response, 'about.html', 'text/html');
			break;
		case '/contact':
			getStaticFileContent(response, 'contact.html', 'text/html');
=======
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
>>>>>>> 8e78e29e844236cbda6171f8ee323392bdfe0a0e
			break;
		default:
			response.writeHead(404, {'Content-Type':'text/plain'});
			response.end('404 - Page not found.');

	}
<<<<<<< HEAD
}).listen(port);
=======
}).listen(9099);
console.log('server running at http://localhost:9099');
>>>>>>> 8e78e29e844236cbda6171f8ee323392bdfe0a0e


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
