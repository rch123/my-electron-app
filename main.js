const electron =require('electron')
const app=electron.app
const BrowserWindow=electron.BrowserWindow
app.on('ready',()=>{
    let win=null
    win= new BrowserWindow({
        width:1000,
        height:1000
    })
    // 打开本地文件
    // win.loadFile()
    // 打开https文件
    // win.loadURL()
    win.on('close',()=>{
        win=null
    })
})