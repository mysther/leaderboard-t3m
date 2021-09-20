const jsonServer = require('json-server')
const fs = require('fs')
const util = require('util')

const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

var token

try {
 	token = fs.readFileSync('./token', 'utf8').trim()
} catch (err) {
  	console.error(err)
	return
}
var authenticated = "Api Token " + token

server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
	if(req.method != "GET" && req.get("Authorization") != authenticated) {
   		res.sendStatus(401)
	}
	else if(req.method != "GET") {
		req.body.lastupdate = Date.now()
	}
	next()
})
server.use(middlewares)
server.use(router)
server.listen(3000, () => {
	console.log('JSON Server is running')
})
