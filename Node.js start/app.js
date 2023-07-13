// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// // express 가져오기
// const express = require('express');
// const app = express();
// const port = 8000; // port number - ncp에서 열었던 포트 번호 

// app.get('/', (req, res) => {
//   res.send('하이');
// });

// app.listen(port, () => {
//   console.log('8000!');
// });

const express = require('express');
const app = express();
const port = 8000;

// ejs 문법 사용 가능
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.get('/', (req, res) => {
	res.render('test', {parameter1: 5});
});

app.use('/static', express.static( __dirname + '/static'));

app.listen(port, () => {
console.log('8000!');
});

