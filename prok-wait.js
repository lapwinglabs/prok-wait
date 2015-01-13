var program = require('commander');
var tcpPortUsed = require('tcp-port-used');

program
  .version('0.0.3')
  .option('--host [hostname]', 'Host to check', 'localhost')
  .option('--port [port]', 'Port to wait for', 8000)
  .option('--timeout [timeout]', 'Max wait interval', 120000)
  .parse(process.argv);

var timeout = +program.timeout
var host = program.host
var port = +program.port

tcpPortUsed.waitUntilUsedOnHost(port, host, 500, timeout)
  .then(function() {
      console.log('Port %s on %s is now listening.', port, host);
  }, function(err) {
      console.log('Error:', err.message);
  });
