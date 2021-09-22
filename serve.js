const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('dist')).listen(port, () => {
    console.log(`Serving on port ${port}`)
})