(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

require('./upload.js');

console.log('index.js is happy');

},{"./upload.js":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.uploadFile = uploadFile;

function initUpload() {
  document.getElementById('upload').addEventListener('click', function () {
    var fileObj = document.getElementById('upload-file').files[0];
    uploadFile(fileObj);
  });
}

if (window.location.pathname === '/upload') {
  if (document.readyState === 'interactive') {
    initUpload();
  } else {
    document.addEventListener('DOMContentLoaded', initUpload);
  }
}

function uploadFile(fileObj) {
  console.log('uploading ' + fileObj.name + ': ' + Math.round(fileObj.size / 1000) + 'KB');
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvbWFtYV9tYW51c2NyaXB0cy9Eb2N1bWVudHMvZ2l0cy9JbWFnZUhvc3RpbmdTZXJ2aWNlL3NyYy9pbmRleC5qcyIsIi9Vc2Vycy9tYW1hX21hbnVzY3JpcHRzL0RvY3VtZW50cy9naXRzL0ltYWdlSG9zdGluZ1NlcnZpY2Uvc3JjL3VwbG9hZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O1FDQU8sYUFBYTs7QUFFcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBOzs7Ozs7Ozs7O0FDRGhDLFNBQVMsVUFBVSxHQUFHO0FBQ3BCLFVBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQVc7QUFDckUsUUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDN0QsY0FBVSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0dBQ3BCLENBQUMsQ0FBQTtDQUNIOztBQUVELElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEtBQUssU0FBUyxFQUFFO0FBQzFDLE1BQUksUUFBUSxDQUFDLFVBQVUsS0FBSyxhQUFhLEVBQUU7QUFDekMsY0FBVSxFQUFFLENBQUE7R0FDYixNQUFNO0FBQ0wsWUFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFVBQVUsQ0FBQyxDQUFBO0dBQzFEO0NBQ0Y7O0FBRU0sU0FBUyxVQUFVLENBQUMsT0FBTyxFQUFFO0FBQ2xDLFNBQU8sQ0FBQyxHQUFHLGdCQUFjLE9BQU8sQ0FBQyxJQUFJLFVBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFLLENBQUE7Q0FDL0UiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0ICcuL3VwbG9hZC5qcydcblxuY29uc29sZS5sb2coJ2luZGV4LmpzIGlzIGhhcHB5JylcbiIsIlxuZnVuY3Rpb24gaW5pdFVwbG9hZCgpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwbG9hZCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgdmFyIGZpbGVPYmogPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXBsb2FkLWZpbGUnKS5maWxlc1swXVxuICAgIHVwbG9hZEZpbGUoZmlsZU9iailcbiAgfSlcbn1cblxuaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PT0gJy91cGxvYWQnKSB7XG4gIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnaW50ZXJhY3RpdmUnKSB7XG4gICAgaW5pdFVwbG9hZCgpXG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXRVcGxvYWQpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwbG9hZEZpbGUoZmlsZU9iaikge1xuICBjb25zb2xlLmxvZyhgdXBsb2FkaW5nICR7ZmlsZU9iai5uYW1lfTogJHtNYXRoLnJvdW5kKGZpbGVPYmouc2l6ZSAvIDEwMDApfUtCYClcbn1cbiJdfQ==
