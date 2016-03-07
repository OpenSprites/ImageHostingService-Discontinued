const $ = require('qwery')
const ajax = require('ajax-promise')

function uploadHandler() {
  let fileObj = $('#upload-file')[0]

  if(fileObj.files[0]) $('#upload-form')[0].submit()
  else console.log('No files??')
}

function initUpload() {
  $('#upload-file')[0].addEventListener('change', uploadHandler)
}

if(window.location.pathname === '/upload') {
  if(document.readyState === 'interactive') {
    initUpload()
  } else {
    document.addEventListener('DOMContentLoaded', initUpload)
  }
}

/*
export async function uploadFile(fileObj) {
  console.log(`uploading ${fileObj.name}: ${Math.round(fileObj.size / 1000)}KB`)

  let response = await ajax.post(window, '/upload', fileObj)
  console.log('upload complete! response = ', response)
}
*/
