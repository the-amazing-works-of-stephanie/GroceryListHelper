const {ipcRenderer} = require('electron');
const closeApp = document.getElementById('closeWindow');
closeApp.addEventListener('click', () => {
    ipcRenderer.send('closeWindow')
});