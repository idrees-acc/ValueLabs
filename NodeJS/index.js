const express = ('express')
const app = express.createServer()

const JWTValidate = require('./auth.js')

const testRoute = './routes'

app.routes('test',testRoute)

app.use(JWTValidate)