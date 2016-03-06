'use strict'

const express = require('express')
const jimp = require('jimp')

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

app.listen(3000, function() {
	console.log('OpenSprites Image Hosting is listening on port 3000!')
})
