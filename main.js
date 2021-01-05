const { app, BrowserWindow } = require('electron')
const React = require('react')

function createWindow () {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    //win.loadURL('http://localhost:3000/')
    win.loadFile('mainPage.html')
    win.webContents.openDevTools()
}
//test
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