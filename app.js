const express = require('express');
const os = require('os');

const app = express();

app.use('/', (req, res) => {
    console.log(`Sending response from ${os.hostname()}`);
    res.json({message: 'The cool app is working ...', hostname: os.hostname()});
});

app.listen(3000, () => console.log('Server runs on port 3000'));