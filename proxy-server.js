const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const DIST_DIR = path.join(__dirname, 'dist');
const API_TARGET = 'http://localhost:8081';

const MIME = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.map': 'application/json',
};

const server = http.createServer((req, res) => {
  const parsed = url.parse(req.url, true);

  if (parsed.pathname.startsWith('/api/')) {
    const options = {
      hostname: 'localhost',
      port: 8081,
      path: parsed.path,
      method: req.method,
      headers: req.headers,
    };
    const proxy = http.request(options, (pr) => {
      res.writeHead(pr.statusCode, pr.headers);
      pr.pipe(res);
    });
    req.pipe(proxy);
    return;
  }

  let filePath = path.join(DIST_DIR, parsed.pathname === '/' ? 'index.html' : parsed.pathname);
  const ext = path.extname(filePath);
  const mime = MIME[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        fs.readFile(path.join(DIST_DIR, 'index.html'), (e2, d2) => {
          if (e2) { res.writeHead(404); res.end('Not found'); return; }
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(d2);
        });
      } else {
        res.writeHead(500); res.end('Server error');
      }
    } else {
      res.writeHead(200, { 'Content-Type': mime });
      res.end(data);
    }
  });
});

server.listen(4200, () => console.log('AngularFront running on http://localhost:4200 with proxy to ' + API_TARGET));
