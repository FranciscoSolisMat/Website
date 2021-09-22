const parseMD = require('parse-md').default;
const fs = require('fs');
const marked = require('marked');
const escapeHtml = require('escape-html');
const path = require('path');
const mime = require('mime');

let routes = [];
let version = JSON.parse(fs.readFileSync('package.json', 'utf8') || '').version;

// Load routes from routes.json
const loadRoutes = () => {
    routes.length = 0;
    JSON.parse(fs.readFileSync('routes.json', 'utf8') || '').forEach(route => {
        routes.push(route);
    });
};

// Find a route in the array of routes by name
const getRouteDataByName = (name) => routes.find(route => route.name === name);

// Find a route in the array of routes by path
const getRouteDataByPath = (path) => routes.find(route => route.path === path);

// Check if it has route by name
const hasRouteByName = (name) => routes.find(route => route.name === name) !== undefined;

// Check if it has route by path
const hasRouteByPath = (path) => routes.find(route => route.path === path) !== undefined;

// Render markdown to HTML
const markdownToHtml = (input) => marked.parse(input);

// Render a route
const render = (route, options) => {
    try{
        let meta = options || {}
        let data = getRouteDataByName(route);
        // If the route exists
        if (data) {
            let str = fs.readFileSync(data.filePath, 'utf8') || ''; // Read the file or return an empty string
            if(str.length === 0) return render('error_404'); // If the file is empty, render the 404 page
            let { metadata, content } = parseMD(str); // Parse the content and metadata
            let layoutName = data.layout || 'layout'; // If no layout is specified, use the default layout
            if(!fs.existsSync(`layouts/${layoutName}.html`)) layoutName = 'layout'; // If the layout doesn't exist, use the default layout
            let layout = fs.readFileSync(`layouts/${layoutName}.html`, 'utf8') || ''; // Read the layout file or return an empty string
            let html = markdownToHtml(content); // Render the MD to HTML
            Object.keys(metadata).forEach(key => { // For each metadata key
                let value = metadata[key]; // Get the value
                if(typeof value === 'string') value = escapeHtml(value); // Escape the value if it's a string
                meta[key] = value; // Set the metadata key to the value
            });
            return layout.replace('{{body}}', html).replace(/\{\{([^}]+)\}\}/g, (_, name) => escapeHtml(meta[name] || ''))
        }else {
            // Render the 404 page
            return render('error_404');
        }
    }catch(err) { // If there is an error
        console.log(err); // Log the error
        // return render('error_500'); // Render the error 500 page
        return err + '';
    }
};

const setupHeaders = (headers, _path) => {
    let filePath = path.join(__dirname, _path);
    headers['Content-Type'] = mime.getType(filePath);
    headers['Content-Length'] = fs.statSync(filePath).size;
    headers['Last-Modified'] = fs.statSync(filePath).mtime.toUTCString();
    headers['E-Tag'] = fs.statSync(filePath).mtime.toUTCString() + '-' + version;
};

const getRoutes = () => routes;

module.exports = {
    loadRoutes: loadRoutes,
    getRouteDataByName: getRouteDataByName,
    getRouteDataByPath: getRouteDataByPath,
    hasRouteByName: hasRouteByName,
    hasRouteByPath: hasRouteByPath,
    markdownToHtml: markdownToHtml,
    render: render,
    setupHeaders: setupHeaders,
    getRoutes: getRoutes,
};