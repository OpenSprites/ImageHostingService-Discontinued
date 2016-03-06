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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS9hbGV4L09wZW5TcHJpdGVzL0ltYWdlSG9zdGluZ1NlcnZpY2Uvc3JjL2luZGV4LmpzIiwiL2hvbWUvYWxleC9PcGVuU3ByaXRlcy9JbWFnZUhvc3RpbmdTZXJ2aWNlL3NyYy91cGxvYWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztRQ0FPLGFBQWE7O0FBRXBCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQTs7Ozs7Ozs7OztBQ0RoQyxTQUFTLFVBQVUsR0FBRztBQUNwQixVQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFXO0FBQ3JFLFFBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBQzdELGNBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQTtHQUNwQixDQUFDLENBQUE7Q0FDSDs7QUFFRCxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxLQUFLLFNBQVMsRUFBRTtBQUMxQyxNQUFJLFFBQVEsQ0FBQyxVQUFVLEtBQUssYUFBYSxFQUFFO0FBQ3pDLGNBQVUsRUFBRSxDQUFBO0dBQ2IsTUFBTTtBQUNMLFlBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxVQUFVLENBQUMsQ0FBQTtHQUMxRDtDQUNGOztBQUVNLFNBQVMsVUFBVSxDQUFDLE9BQU8sRUFBRTtBQUNsQyxTQUFPLENBQUMsR0FBRyxnQkFBYyxPQUFPLENBQUMsSUFBSSxVQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBSyxDQUFBO0NBQy9FIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCAnLi91cGxvYWQuanMnXG5cbmNvbnNvbGUubG9nKCdpbmRleC5qcyBpcyBoYXBweScpXG4iLCJcbmZ1bmN0aW9uIGluaXRVcGxvYWQoKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cGxvYWQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIHZhciBmaWxlT2JqID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwbG9hZC1maWxlJykuZmlsZXNbMF1cbiAgICB1cGxvYWRGaWxlKGZpbGVPYmopXG4gIH0pXG59XG5cbmlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT09ICcvdXBsb2FkJykge1xuICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2ludGVyYWN0aXZlJykge1xuICAgIGluaXRVcGxvYWQoKVxuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0VXBsb2FkKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGxvYWRGaWxlKGZpbGVPYmopIHtcbiAgY29uc29sZS5sb2coYHVwbG9hZGluZyAke2ZpbGVPYmoubmFtZX06ICR7TWF0aC5yb3VuZChmaWxlT2JqLnNpemUgLyAxMDAwKX1LQmApXG59XG4iXX0=
