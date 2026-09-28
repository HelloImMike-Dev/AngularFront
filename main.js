const { app, BrowserWindow, Menu, dialog } = require('electron')
// const fixPath = require('fix-path');
//const { ElectronService } =require ('ngx-electron')
var url = require('url');
var path = require('path');

let win;

// fixPath();
function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    minWidth: 1300,
    minHeight: 770,
    frame: false,
    webPreferences: {
      plugins: true
    },
    //titleBarStyle: 'hidden-inset',
    backgroundColor: '#FFFFFF',

      icon: url.format({
      pathname: path.join(__dirname, 'dist/assets/images/logo.png'),
      protocol: 'file:',
      slashes: true
    })
  })


  /* win.loadURL(`file://${__dirname}/dist/index.html`) */

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'dist/index.html'),
    protocol: 'file:',
    slashes: true
  }));

  //// uncomment below to open the DevTools.
   win.webContents.openDevTools();

  /**/
  var template = [{
    label: "Application",
    submenu: [
      { label: "About Application", selector: "orderFrontStandardAboutPanel:" },
      { type: "separator" },
      { label: "Quit", accelerator: "Command+Q", click: function() { app.quit(); }}
    ]}, {
    label: "Edit",
    submenu: [
      { label: "Undo", accelerator: "CmdOrCtrl+Z", selector: "undo:" },
      { label: "Redo", accelerator: "Shift+CmdOrCtrl+Z", selector: "redo:" },
      { type: "separator" },
      { label: "Cut", accelerator: "CmdOrCtrl+X", selector: "cut:" },
      { label: "Copy", accelerator: "CmdOrCtrl+C", selector: "copy:" },
      { label: "Paste", accelerator: "CmdOrCtrl+V", selector: "paste:" },
      { label: "Select All", accelerator: "CmdOrCtrl+A", selector: "selectAll:" }
    ]}
  ];

  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu);

  // La pagina cancela el cierre cuando hay un video de Inspeccion/Embalar sin guardar (beforeunload)
  win.webContents.on('will-prevent-unload', function (event) {
    var opcion = dialog.showMessageBox(win, {
      type: 'warning',
      buttons: ['Esperar', 'Cerrar de todas formas'],
      defaultId: 0,
      cancelId: 0,
      title: 'Video sin guardar',
      message: 'Hay un video de Inspección o Embalar que todavía no se ha guardado.',
      detail: 'Si cierras ahora, el video se perderá.'
    });
    if (opcion === 1) {
      event.preventDefault();
    }
  });

  // Event when the window is closed.
  win.on('closed', function () {
    win = null
  })
}

// Create window on electron intialization
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {

  // On macOS specific close process
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // macOS specific close process
  if (win === null) {
    createWindow()

    }


})
