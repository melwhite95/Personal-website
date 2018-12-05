//DECLERATIONS
const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');



//middleware
app.use(bodyParser.json());

app.use(express.static(`${__dirname}/../aguyweb`));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/../aguyweb/index.html`));
});








app.listen(3000, () => {
  console.log('App listening on port 3000!')
})
