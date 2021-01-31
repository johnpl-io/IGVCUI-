/*const http = require('http')
const fs = require('fs')
const port = 8000
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

// Import user32 library
const user32 = new ffi.Library("user32", {
  "MessageBoxW": [
    "int32", ["int32", "string", "string", "int32"]
  ],
  "SetCursorPos": [
    "bool", ["int32", "int32"]
  ]
});

// Call function
const OK_or_Cancel = user32.MessageBoxW(
  0, TEXT("Hellow from Node.js!"), TEXT("Hellow World!"), 1
)

console.log(OK_or_Cancel);

user32.SetCursorPos(0, 0); 

