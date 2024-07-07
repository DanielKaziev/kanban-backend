const express = require('express');
const app = express();
const port = 3000;

app.get('/api', (req, res) => {
    res.json({data: "lorem"})
    console.log("Request");
});

app.listen(port, () => {
    console.log(`Express server running on http://localhost:${port}`);
});