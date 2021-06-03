const express = require('express');
const sass = require('node-sass');
const app = express();
const PORT = 3008; // default port 3008

//Set view engine to EJS, use SCSS middleware for styling
app.set('view engine', 'ejs');
app.use(sass.middleware({ src: __dirname + '/public' }));

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
