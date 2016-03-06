'use strict'

const fs = require('fs')
const express = require('express')
const jimp = require('jimp')
const os = require('os')
const https = require('http')
const chalk = require('chalk')

let app = express()

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/public/index.html')
})

app.get('/upload', function(req, res) {
	res.sendFile(__dirname + '/public/upload.html')
})

app.use(express.static('dist'))
app.use(express.static('public'))

app.get('*', function(req, res) {
	res.sendFile(__dirname + '/public/404.html')
})

// ssl for opensprites.org *only*
if(os.hostname() == 'opensprites.org') {
	serve.createServer({
		key: fs.readFileSync('/home/admin/conf/web/ssl.opensprites.org.key'),
		cert: fs.readFileSync('/home/admin/conf/web/ssl.opensprites.org.crt')
	}, app).listen(3000, function() {
		console.log('[	 ] ' + chalk.blue('Listening ' + chalk.underline('(ssl mode enabled!) ') + '...'))
	})
} else {
	app.listen(function() {
		console.log('[	 ] ' + chalk.blue('Listening...'))
	})
}
