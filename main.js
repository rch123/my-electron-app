const electron =require('electron')
const ipcMain=electron.ipcMain
console.log(ipcMain,'ipcMain')
const path=require('path')
const app=electron.app
const BrowserWindow=electron.BrowserWindow
app.on('ready',()=>{
    let win=null
    win= new BrowserWindow({
        width:1000,
        height:1000,
        webPreferences:{
            preload:path.join(__dirname,'./preload.js')
        }
    })
    // 打开本地文件
    win.loadFile('./index.html').then(r => r)
    // 打开https文件
    // win.loadURL()
    // 打开开发者工具
    win.webContents.openDevTools()
    win.on('close',()=>{
        win=null
    })
})
// 主进程生命周期
// window-all-closed 可以监测窗口关闭
app.on('window-all-closed',()=>{
    // 对于mac系统 ，关闭窗口时退出应用
    if(process.platform==='darwin') app.quit()
})
// 主进程发送消息
ipcMain.handle('hanler-ipc', (event,msg)=>{
   return msg
})