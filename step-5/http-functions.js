var https = require('https');

module.exports = function getHTML (options, callback) {
    /* Your code here */
  https.get(options, function(response) {
    var chunkStr = '';
    response.on('data', function (chunk) {
      chunkStr += chunk;
    })
    response.setEncoding('utf-8');
    response.on('end', function() {
      callback(chunkStr);
    })
  });
};