var http = require("http");

// Define a port to listen for incoming requests
var PORTONE = 7000;
var PORTTWO = 7500;

// Create a generic function to handle requests and responses
function handleRequest(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("It Works!! Path Hit: 1" + request.url);
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server = http.createServer(handleRequest);

// Start our server so that it can begin listening to client requests.
server.listen(PORTONE, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORTONE);
});


function handleRequestTwo(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("It Works!! Path Hit: 2" + request.url);
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var serverTwo = http.createServer(handleRequestTwo);

serverTwo.listen(PORTTWO, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORTTWO);
});