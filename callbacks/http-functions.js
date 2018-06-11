module.exports = function getHTML (options, callback) {
    /* Your code here */
  var https = require('https');
  var allChunks = '';

  var path = options[path];
  var host = options[host];

  https.get(options, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (chunk) {
      allChunks += chunk.toString() + '\n';
    });

    response.on('end', function() {
      callback(allChunks);
    });

    response.on('error', function(err) {
      console.log(err.stack);
    });
  });
};

