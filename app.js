const express = require('express');
const app = express();
const PORT = 3008; // default port 3008

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('pages/index');
});

app.get('/about', (req, res) => {
  res.render('pages/about');
});

app.get('/contact', (req, res) => {
  res.render('pages/contact');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
