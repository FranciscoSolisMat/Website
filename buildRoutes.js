const fs = require('fs');
const parseMD = require('parse-md').default;
let routes = []

const searchViews = (dir) => {
    fs.readdirSync(dir).forEach(file => {
        const filePath = `${dir}/${file}`;
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            searchViews(filePath);
        } else if (file.endsWith('.md')) {
            let str = (fs.readFileSync(filePath, { encoding: 'utf-8' }) || '');
            let { metadata } = parseMD(str);
            if (metadata.route && metadata.path) {
                routes.push({
                    filePath: filePath,
                    path: metadata.path,
                    name: metadata.route,
                });
            }
        }
    })
}

searchViews('views');

fs.writeFileSync('routes.json', JSON.stringify(routes));
console.log(`routes.json loaded with ${routes.length} routes`);