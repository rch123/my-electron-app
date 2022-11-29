// console.log(process.platform)
const {contextBridge,ipcRenderer} =require('electron')
console.log(contextBridge)
const handler=async ()=>{
    let result =await ipcRenderer.invoke('hanler-ipc','哈哈哈哈')
     console.log(result)
    return result

}
contextBridge.exposeInMainWorld('myApi', {
    platform:process.platform,
    handler
})