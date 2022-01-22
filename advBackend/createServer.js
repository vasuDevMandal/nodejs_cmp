const http = require("http");

// const server = http.createServer((err, data) => {
//   console.log("running...");
// });

// let host = "127.0.0.1";
// let port = 5000;

// server.listen(port, () => {
//   console.log(`started server at ${host} and port ${port}`);
// });

//create a server object:
http
  .createServer(function (req, res) {
    res.write("Hello World!"); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
