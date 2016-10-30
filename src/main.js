/**
 * Created by Shin on 30/10/2016.
 */
const electron = require('electron');
const countdown = require('./countdown');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const ipc = electron.ipcMain;

const windows = [];

app.on('ready', _ => {

    [1,2,3].forEach(_ => {

        let win = new BrowserWindow({
            height: 400,
            width: 400
        });

        win.loadURL(`file://${__dirname}/countdown.html`);

        win.on('closed', _ => {
            console.log('closed');
            mainWindow = null;
        });

        windows.push(win);
    });
});

ipc.on('countdown-start', _ => {
    console.log('caught it!');
    countdown(count => {
        windows.forEach(win => {
            console.log('count came back ' , count);
            win.webContents.send('countdown', count);
        });
    });
});