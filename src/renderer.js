document.getElementById('parse-btn').addEventListener('click', () => {
    const cssContent = generateCSS();
    const { ipcRenderer } = require('electron');
    ipcRenderer.send('save-css', cssContent);
});

function generateCSS() {
    const color = document.getElementById('color-input').value;
    const fontSize = document.getElementById('font-size-input').value;

    return `
    body {
        color: ${color};
        font-size: ${fontSize}px;
    }
    `;
}

const { ipcRenderer } = require('electron');
ipcRenderer.on('css-saved', (event, message) => {
    alert(message);
});
