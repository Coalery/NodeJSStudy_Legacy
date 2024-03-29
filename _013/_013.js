var http = require('http');
var fs = require('fs');
var url = require('url');

function templateHTML(title, list, body) {
    return `
    <!doctype html>
        <html>
            <head>
                <title>WEB1 - ${title}</title>
                <meta charset="utf-8">
            </head>
        <body>
            <h1><a href="/">WEB</a></h1>
            ${list}
            ${body}
        </body>
    </html>
    `;
}

function templateList(fileList) {
    var list = '<ul>';
    for(var i = 0; i < fileList.length; i++) {
        list += `<li><a href="/?id=${fileList[i]}">${fileList[i]}</a></li>`
    }
    list = list + '</ul>'
    return list;
}

var app = http.createServer((request, response) => {
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    var title = queryData.id;

    if(pathname == '/') {
        if(queryData.id === undefined) {
            fs.readdir('./_013/data', (err, fileList) => {
                var title = 'Welcome';
                var description = 'Hello, Node.js';
                var list = templateList(fileList);
                var template = templateHTML(title, list, `<h2>${title}</h2>${description}`);
                response.writeHead(200);
                response.end(template);
            });
        } else; {
            fs.readdir('./_013/data', (err, fileList) => {
                var title = queryData.id;
                var list = templateList(fileList);
                fs.readFile(`_013/data/${title}`, 'utf8', (err, description) => {
                    var template = templateHTML(title, list, `<h2>${title}</h2>${description}`);
                    response.writeHead(200);
                    response.end(template);
                });
            });
        }
    } else {
        response.writeHead(404);
        response.end('Not Found');
    }
});

app.listen(3000);