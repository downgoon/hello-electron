var electron = require('electron');

electron.app.on('ready', function createWindow () {

  new electron.BrowserWindow(
      {width: 800, height: 600}
    ).loadURL('file://' + __dirname + "/index.html")

} );
