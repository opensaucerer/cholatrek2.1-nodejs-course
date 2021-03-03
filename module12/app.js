const express = require('express');

const app = express();

mongdbConnectionString =
  'mongodb+srv://<username>:<password>@samperfect.fn35f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

app.get('/', (req, res) => {
  res.send('Setting up MongoDB on Atlas...');
});

app.get('/about', (req, res) => {
  res.send('Setting up MongoDB on Atlas...');
});

app.all('*', (req, res) => {
  res.send(
    'That page does not exist. Just FYI, we are currently setting up MongoDB on Atlas'
  );
});

app.listen(5000, () => {
  console.log('Setting up MongoDB on Atlas...');
});
