const http = require("http");
const hostname = '127.0.0.1';
const port = 9090;


const server = http.createServer((req,res) => {
	const a = 4;
	const b = 3;
	const c=a+b;
	res.statusCode = 200;
	res.setHeader('content-Type','text/plain');
	console.log('a:',a);
	console.log('b:',b);
	res.end('sum of two numbers:$(c)');
	
});

server.listen(port, hostname, () => {
	console.log(`server running at http: //${hostname}:${port}/`);
	
});	
	