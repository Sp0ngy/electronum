const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600
    })
  
    // win.loadFile('index.html')
    win.loadURL('http://127.0.0.1:8000')
  }

app.whenReady().then(() => {
   createWindow()
  })

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
   })
 

