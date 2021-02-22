const http = require('http')
const fs = require('fs')
const port = 8000




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
const mathLibrary = new ffi.Library("./test", {
  "Subtract": [
      "int", ["int", "int"] //return type ,[parameters]
  ],
  "Add": [
      "int", ["int", "int"]
  ],
  "RandomNum": [
    "int", []
]

});

console.log(mathLibrary.Add(15, 5));
function myFunction() {

  setInterval(function(){document.getElementById("demo").innerHTML = mathLibrary.RandomNum(); }, 1);
}
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
       
      const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})