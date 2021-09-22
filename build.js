const parseMD = require('parse-md').default;
const fs = require('fs');
const path = require('path');
const { loadRoutes, render, getRoutes } = require('./app');

if(!fs.existsSync('./dist/')) fs.mkdirSync('./dist/');

let start = Date.now();
loadRoutes();

// Purge old distribution files
const purgeFiles = (dir) => {
    fs.readdirSync(dir).forEach(file => {
        const filePath = path.join(dir, file);
        if (fs.lstatSync(filePath).isDirectory()) {
            purgeFiles(filePath);
        } else {
            fs.unlinkSync(filePath);
        }
    });
};

purgeFiles('dist');

getRoutes().forEach(metadata => {
    let html = render(metadata.name);
    let filePath = metadata.path
    if(!filePath.endsWith('.html') && filePath.endsWith('/')) {
        filePath += 'index.html';
    } else if (!filePath.endsWith('.html')) {
        filePath += '.html';
    }
    let finalPath = path.join(__dirname, 'dist', filePath);
    let foldersPath = finalPath.substring(0, finalPath.lastIndexOf('/'));
    if(!fs.existsSync(foldersPath)) fs.mkdirSync(foldersPath, { recursive: true });
    fs.writeFileSync(finalPath, html);
});

// Copy all files and folders from folder 'assets' to 'dist/assets'
const copyAssets = (src, dest) => {
    fs.readdirSync(src).forEach(file => {
        const filePath = path.join(src, file);
        if(!filePath.endsWith('tailwind.css')){ // Skip tailwind.css (built from cli)
            const destPath = path.join(dest, file);
            if (fs.lstatSync(filePath).isDirectory()) {
                if (!fs.existsSync(destPath)) fs.mkdirSync(destPath, { recursive: true });
                copyAssets(filePath, destPath);
            } else {
                fs.copyFileSync(filePath, destPath);
            }
        }
    });
}

copyAssets('./assets', './dist/assets');

const { exec } = require('child_process');

// Build tailwind
exec('npx tailwindcss --postcss -c ./tailwind.config.js -o ./dist/assets/css/tailwind.css --minify', (err, stdout, stderr) => {
  if (err) return;

  let end = Date.now();
  console.log(`Took ${end - start}ms`);
});