const { loadRoutes, getRouteDataByName, getRouteDataByPath, hasRouteByName, hasRouteByPath, render, setupHeaders } = require('./app');
const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 3000;

loadRoutes();

const staticPrefixes = ['assets'];

http.createServer((req, res) => {
    let path = req.url
    let isStatic = staticPrefixes.includes(path.split('/')[1])
    if(process.env.DEBUG) console.log(`${req.method} ${path} - isStatic: ${isStatic}`)
    if(isStatic) {
        fs.readFile(`./${path}`, (err, data) => {
            if(err){
                res.writeHead(404)
                    .end(JSON.stringify(err))
            }else{
                let headers = {};
                setupHeaders(headers, path)
                if(process.env.DEBUG) console.log(`- Headers: ${JSON.stringify(headers)}`);
                res.writeHead(200, headers).end(data)
            }
        });
    }else{
        start = Date.now()
        let code = 200;
        if(!hasRouteByPath(path)) code = 404
        let routeData = getRouteDataByPath(path)
        if(process.env.DEBUG) console.log(`routeData: ${JSON.stringify(routeData)}`)
        let response;
        if (routeData) {
            response = render(routeData.name)
        } else {
            if(process.env.DEBUG) console.log(`Not found!`)
            response = render('error_404')
        }

        res.writeHead(code, { 'Content-Type': 'text/html' }).end(response)
        let end = Date.now()
        if(process.env.DEBUG) console.log(`${req.method} ${path}- ${end - start}ms`)
    }
}).listen(port, () => {
    console.log(`Server running on port ${port}`)
});