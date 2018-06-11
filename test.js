var getHTML = require('./step5-module');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printHTML (html) {
  console.log(html);
}

getHTML(requestOptions.host, requestOptions.path , printHTML);