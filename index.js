'use strict'

const express = require('express')
const jimp = require('jimp')

let app = express()

app.get('/', function(req, res) {
	res.send('Hello World!')
})

app.listen(3000, function() {
	console.log('OpenSprites ImageHostingService is listening on port 3000!')
})
