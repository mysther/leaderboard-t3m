const jsonServer = require('json-server')
const fs = require('fs')
const util = require('util')

const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

var token

try {
  token = fs.readFileSync('./token', 'utf8')
} catch (err) {
  console.error(err)
  return
}

server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
	if(req.method != "GET" && req.get("Authorization")  != "Api Token " + token) {
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