var getHTML = require('../step-5/http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

function printUppercase (html) {
  console.log(html.toUpperCase());
}

getHTML(requestOptions, printUppercase);