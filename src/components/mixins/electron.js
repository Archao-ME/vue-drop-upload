const {ipcRenderer} = window.require('electron')
export default {
  closeWin: () => {
    ipcRenderer.send('close-main-window', 'close')
  },
  copyUrl: (text) => {
    ipcRenderer.send('clipboard-write', text)
  }
}
