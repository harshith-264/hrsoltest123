const http = require("http");
const hostname = '127.0.0.1';
const port =8081;


const server = http.createServer((req,res) => {
	res.statusCode = 200;
	res.setHeader('content-Type','text/plain');
	res.end('Hello World 123\n');
});

server.listen(port, hostname, () => {
	console.log(`server running at http: //${hostname}:${port}/`);
	console.log("Welcome");
	
});	
	
