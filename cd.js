const server = http.createServer(function (request, response) {
    response.setHeader('Content-Type', 'text/html; charset=utf-8');
    if (request.url == '/') {
        response.end('<h1>Inicio</h1>')
    }
    else if (request.url == '/contatos'){
        response.end('<h1>Contatos</h1>')
    }
    else if (request.url == '/sobre'){
        response.end('<h1>Sobre</h1>')
    }
    else {
        response.statusCode = 404;
        response.end ('<h1>Not Found!</h1>')
    }
});