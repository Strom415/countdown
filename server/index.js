const express = require('express');
const path = require('path');

const app = express();
const port = 3087;

app.use(express.static(path.resolve(__dirname, '../public/dist')));

app.listen(port, console.log(`listening on port ${port}`));
