var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };



  /* Add your code here */
  https.get(requestOptions, function(response) {
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

getAndPrintHTML();