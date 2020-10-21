const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, autoUpdater, dialog, BrowserWindow} = electron;

let win;

// Listen for app to be ready
app.on('ready', function () {
    win = new BrowserWindow({
        fullscreen: true,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: false
        }
    });
    win.loadFile('pages/index.html')
});

