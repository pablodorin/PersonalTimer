const { app, BrowserWindow } = require('electron');
const path = require('path');    

function createWindow(){

    const win = new BrowserWindow({
        width: 330,
        height: 220,
        resizable: false,
        icon: path.join(__dirname, 'img/icon.ico'),
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });
    win.setMenu(null);

    win.loadFile(path.join(__dirname, 'index.html'));
}

app.whenReady().then(createWindow);

app.on('window-all-closed', ()=> {
    if(process.platform !== 'darwin') app.quit();
});