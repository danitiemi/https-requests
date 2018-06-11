module.exports = function getHTML (host, path, callback) {
    /* Your code here */
  var https = require('https');
  var allChunks = '';

  var options = {
    host,
    path
  };

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

