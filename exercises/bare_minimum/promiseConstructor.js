/******************************************************************
 *                Using the Promise constructor                   *
 ******************************************************************/

var fs = require('fs');
var request = require('request');
var Promise = require('bluebird');

// There are five steps to writing a promise returning function:
//   (1) Create a promise with the `new Promise` constructor
//   (2) Do something async, then...
//     (3) Pass the successful value into the `resolve` function
//         - this value will be made available in the next `then` block
//         - only 1 value can ever be passed into `resolve`
//     (4) Pass any errors into the `reject` function
//         - this error will be made available in the `catch` block
//   (5) return the promise instance


/******************************************************************
 *                         Exercises                              *
 ******************************************************************/

// Use the above steps to implement these promise returning functions
// Any successful value should be made available in the next `then` block chained
// to the function invocation, while errors should be available in the `catch` block

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function (filePath) {
  return new Promise(function(resolve, reject) {
    fs.readFile(filePath, 'utf8', function(error, content) {
      error ? reject(error) : resolve(content.split('\n')[0]); 
    });
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function (url) {
  return new Promise(function(resolve, reject) {
    request(url, function(error, response) {
      error ? reject(error) : resolve(response.statusCode);
    });
  });
};

// Export these functions so we can unit test them
// and reuse them in later code ;)
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
