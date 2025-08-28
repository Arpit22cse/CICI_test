const express = require('express');
const app = express();

app.get('/health', (req, res) => {
  res.send('Hello World!');
});

app.get('/all', (req, res) => {
  res.send('Hello World! hello Arpit');
});''

app.get('/specific', (req, res) => {
  res.send('Hello World! hello Arpit');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
