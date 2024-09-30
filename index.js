// server.js
const express = require('express');
var cors = require('cors')

const app = express();
const port = 3000;

app.use(cors())


app.get('/events', (req, res) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    setInterval(() => {
        const data = { message: 'Hello, World!', timestamp: new Date() };
        res.write(`data: ${JSON.stringify(data)}\n\n`);
    }, 2000);
});

app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}/`);
});
