const { app, BrowserWindow } = require('electron')
const React = require('react')
const remote = require('electron').remote

function createWindow () {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })
    win.loadFile('homePage.html')
    win.webContents.openDevTools()
}
//test
app.whenReady().then(createWindow)

const {ipcMain} = require('electron')
ipcMain.on('closeWindow', (evt, arg) => {
    app.quit()
})

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