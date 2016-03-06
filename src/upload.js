
function initUpload() {
  document.getElementById('upload').addEventListener('click', function() {
    var fileObj = document.getElementById('upload-file').files[0]
    uploadFile(fileObj)
  })
}

if (window.location.pathname === '/upload') {
  if (document.readyState === 'interactive') {
    initUpload()
  } else {
    document.addEventListener('DOMContentLoaded', initUpload)
  }
}

export function uploadFile(fileObj) {
  console.log(`uploading ${fileObj.name}: ${Math.round(fileObj.size / 1000)}KB`)
}
