const express = require('express');
const app = express();
const port = 5000;

app.get('/api', (req, res) => {
    res.json({data: "newData"})
    console.log("Request");
});

app.listen(port, () => {
    console.log(`Express server running on http://localhost:${port}`);
});
