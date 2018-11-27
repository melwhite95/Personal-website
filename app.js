//DECLERATIONS

const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 2323;
const path = require('path');
const app = express();

//middleware
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../aguyweb`));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/../aguyweb/index.html`));
});








app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});
