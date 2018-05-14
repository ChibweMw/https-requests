var https = require('https');

function getAndPrintHTML (options) {

  /* Add your code here */
  https.get(options, function(response) {
    var chunkStr = '';
    response.setEncoding('utf-8');
    response.on('data', function (chunk) {
      chunkStr += chunk;
    })
    response.on('end', function() {
      console.log(chunkStr);
    })
  });
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);