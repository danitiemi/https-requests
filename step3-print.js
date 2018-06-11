function getAndPrintHTML (options) {

  /* Add your code here */
  var https = require('https');
  var allChunks = '';

  var options = {
    host: '',
    path: ''
  };

  https.get(requestOptions, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (chunk) {
      allChunks += chunk.toString() + '\n';
    });

    response.on('end', function() {
      console.log(allChunks);
    });

  });
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML();