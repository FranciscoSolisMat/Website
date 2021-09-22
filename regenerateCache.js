const fs = require('fs');
const cacheFolder = '.cache/'

if(!fs.existsSync(cacheFolder))fs.mkdirSync(cacheFolder);
fs.readdirSync(cacheFolder).forEach(file => {
    fs.unlinkSync(cacheFolder+file);
});