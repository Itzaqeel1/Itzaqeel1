var http = require('http');
var requests=0;
var podname= process.env.HOSTNAME;
var startTime;
var host;

var handleRequest = function(request, response) {
  response.setHeader('Content-Type', 'text/plain');
  response.writeHead(200);
  response.write("DevOps Coursework 2! | Running on: ");
  response.write(host);
  response.end(" | v=0\n"); // <--- Note this initial version number 'v=0'
  console.log("Running On:",host, "| Total Requests:", ++requests,"| App Uptime:", (new Date() - startTime)/1000 , "seconds", "| Log Time:",new Date());
}

var www = http.createServer(handleRequest);
www.listen(8080, function () {
    startTime = new Date();;
    host = process.env.HOSTNAME; // Corrected: Use HOSTNAME from environment
    // Fallback if HOSTNAME is not set (e.g., running locally not in K8s)
    if (host == null || host == "") {
      host = require('os').hostname(); // Get OS hostname as fallback
    }
    console.log ("Started At:",startTime, "| Running On: " ,host, "\n" );
});
