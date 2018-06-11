function getHTML (options, callback) {

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
      printHTML(allChunks);
    });

  });
}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML();