// eslint-disable-next-line import/no-extraneous-dependencies
const electron = require('electron')

const { app, dialog } = electron
const { BrowserWindow } = electron

const path = require('path')
const url = require('url')

let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({ width: 800, height: 600 })
  const startUrl = process.env.ELECTRON_START_URL
  || url.format({
    pathname: path.join(__dirname, '/../dist/index.html'),
    protocol: 'file:',
    slashes: true,
  })

  mainWindow.loadURL(startUrl)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

app.on('gpu-process-crashed', (event) => {
  dialog.showErrorBox('gpu-process-crashed', event)
})

app.on('renderer-process-crashed', (event) => {
  dialog.showErrorBox('renderer-process-crashed', event)
})
