const http = require('http')
const fs = require('fs')
const port = 8000
/*
const zoomooz = require('zoomooz')
const server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html'})
    fs.readFile('index.html', function(error, data) {
    if(error) {
        res.writeHead(404)
        res.write('Error: File Not Found')
    } else {
        res.write(data)
    }
    res.end()
    })

  
})

server.listen(port, function(error) {
if (error) {
    console.log('Something went wrong', error) 

}
else {
console.log('Server is listening on port ' + port)
}
}) */


const msg1 = "test";
console.log(msg1);

const ffi = require('ffi-napi');

const msg2 = "test";
console.log(msg2);

// Converts JSString to CString
function TEXT(text) {
  return Buffer.from(`${text}\0`, "ucs2"); 
} 

// import mathLibrary
const mathLibrary = new ffi.Library("./MathLibrary", {
  "Subtract": [
      "int", ["int", "int"] //return type ,[parameters]
  ],
  "Add": [
      "int", ["int", "int"]
  ]
});

console.log(mathLibrary.Add(15, 5));
console.log(mathLibrary.Subtract(15, 5));

const server = http.createServer(function(req, res) {
  res.write(mathLibrary.Add(15, 5).toString())
  res.end()
     })
     server.listen(port, function(error) {
      if (error) {
          console.log('Something went wrong', error) 
      
      }
      else {
      console.log('Server is listening on port ' + port)
      }
      })