var Gun = require('gun')
var http = require('http')
var fs = require('fs')

var server = http.createServer((req,res) => {
  if (Gun.serve(req, res)) { return } // optional, for CDN
  res.writeHead(200)
  res.end(fs.readFileSync(__dirname + '/index.html')) // or replace this with your app
}).listen(process.env.PORT || process.argv[2] || 8080)

var gun = Gun({web: server})
