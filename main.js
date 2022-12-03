const {app, BrowserWindow} = require('electron')
const path = require('path')


const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      autoHideMenuBar: true,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js')
      }
    })
  
    win.loadFile('index.html')
  }

    /* Can't Run until app from electron is read and when it is runs create window function*/
    app.whenReady().then(() => {
        createWindow()

        app.on('activate', () =>{
            if (BrowserWindow.getAllWindows().length === 0) createWindow()
        })
    })

    /* For Windows and Linux Closing Windows */
    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') app.quit()
    })

