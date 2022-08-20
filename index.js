const http = require("http");

const hostname = 'localhost';
const port = 8000;

const items = [{
    id: 1,
    name: 'Shoe',
    price: 1000
}]

// Add Request Listener to the server
const requestListener = function (request, response) {
    console.log('this is the url: ', request.url, request.method)

    if (request.url === '/items' && request.method === 'GET') {
        response.writeHead(200); // Status code 200 = OK
        // response.write(JSON.stringify(item));
        response.end(JSON.stringify(items));
        
        return;
    }

    if (request.url === '/items' && request.method === 'POST') {
        response.writeHead(200); // Status code 200 = OK
        // response.write(JSON.stringify(item));
        items.push({id: 2, name: 'Tie', price: 200})
        response.end(JSON.stringify(items));

        return;
    }

    if (request.url === '/items' && request.method === 'PUT') {
        response.writeHead(200); // Status code 200 = OK
        // response.write(JSON.stringify(item));

        items[0].name = 'new shoe name'

        response.end(JSON.stringify(items));

        return;
    }


    if (request.url === '/items' && request.method === 'DELETE') {
        response.writeHead(200); // Status code 200 = OK
        // response.write(JSON.stringify(item));

        items.pop()

        response.end(JSON.stringify(items));

        return;
    }

    response.writeHead(200); // Status code 200 = OK
    response.write("Request logged");
    response.end();
};



// Create the server
const server = http.createServer(requestListener)


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})


