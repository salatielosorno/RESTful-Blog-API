const express = require('express');
const bodyparser = require('body-parser');
const routes = require('./routes')
const port = process.env.PORT || 3000;

app = express();
app.use(bodyparser.json());
app.use(routes)

app.listen(port || 3000, () => { console.log(`App listening on port ${port}`) });