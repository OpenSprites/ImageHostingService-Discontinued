'use strict'

const fs = require('fs')
const express = require('express')
const Jimp = require('jimp')
const os = require('os')
const https = require('https')
const chalk = require('chalk')
const shortid = require('shortid')
const multer = require('multer')
const upload = multer()
const svg2png = require('svg2png')

let app = express()
app.set('trust proxy', true)

// root, welcome page
app.get('/', function(req, res) {
	res.sendFile(__dirname + '/public/index.html')
})

// upload an image form
app.get('/upload', function(req, res) {
	res.sendFile(__dirname + '/public/upload.html')
})

// the main attraction
app.post('/upload', upload.single('file'), function(req, res) {
	if(req.file.mimetype == 'image/svg+xml') {
		// svg uploads
		svg2png(req.file.buffer, {
			width: 640,
			height: 720
		}).then(function(buffer) {
			req.file.buffer = buffer
			fileUpload(req, res)
		}).catch(function(e) {
			console.log(`[  ${chalk.red.bold('err!')}  ] ${e}`)
			res.redirect('/upload/fail')
		})
	} else {
		// png, jpeg, bmp uploads
		fileUpload(req, res)
	}
})

function fileUpload(req, res) {
	let id = shortid.generate()
	Jimp.read(req.file.buffer).then(function(img) {
		img.contain(640, 720) // fit to scratch forums max image size
		img.autocrop() // crop same-color borders from image (if any)

		img.write(__dirname + '/uploads/' + id + '.png', function(e) {
			if(e) {
				console.log(`[  ${chalk.red.bold('err!')}  ] ${e}`)
				res.redirect('/upload/fail')
			} else res.redirect('/' + id)
		})
	}).catch(function(e) {
		console.log(`[  ${chalk.red.bold('err!')}  ] ${e}`)
		res.redirect('/upload/fail')
	})
}

// get and display raw image
app.get('/:id', function(req, res) {
	let file = __dirname + `/uploads/${req.params.id}.png`

	// only allow displaying on Scratch or OpenSprites
	if(os.hostname() == 'opensprites.org') {
		if(req.get('host') !== 'scratch.mit.edu' || req.get('host') !== 'opensprites.org') {
			res.sendFile(__dirname + '/public/404.html')
		}
	}

	fs.stat(file, function(err, stat) {
		if(err) res.sendFile(__dirname + '/public/404.html')
		else res.sendFile(file)
	})
})

app.use('/dist', express.static('dist'))
app.use(express.static('public'))

app.get('*', function(req, res) {
	res.sendFile(__dirname + '/public/404.html')
})

// ssl for opensprites.org *only*
if(os.hostname() == 'opensprites.org') {
	https.createServer({
		key: fs.readFileSync('/home/admin/conf/web/ssl.opensprites.org.key'),
		cert: fs.readFileSync('/home/admin/conf/web/ssl.opensprites.org.crt')
	}, app).listen(3000, function() {
		console.log('[  ----  ] ' + chalk.blue('Listening on ' + chalk.bold('https://opensprites.org:3000') + '...'))
	})
} else {
	app.listen(3000, function() {
		console.log('[  ----  ] ' + chalk.blue('Listening on ' + chalk.bold('localhost:3000') + '...'))
	})
}
