const http = require('http')
const fs = require('fs')

const port = process.env.PORT || 3000;

http.createServer((req, res) => {
	const path = req.url === '/' || !req.url ? '/index.html' : req.url;
	const filePath = __dirname + path;
	fs.readFile(filePath, (err, data) => {
		if (err) {
			res.writeHead(404)
			res.end(JSON.stringify(err))
			return
		}
		res.writeHead(200)
		res.end(data)
	})
}).listen(port)