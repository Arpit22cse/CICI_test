const express = require('express');
const app = express();

app.get('/health', (req, res) => {
  res.status(200).json({msg: 'Hello World!'});
});

app.get('/all', (req, res) => {
  res.status().json({msg : 'Hello World! hello Arpit'});
});

app.get('/health2', (req,res) => {
  res.status(200).json({msg: 'Hello World! hello Arpit health2'});
});

app.get('/health3', (req,res) => {
  res.status(200).json({msg: 'Hello World! hello Arpit health3'});
});

app.get('/health4', (req,res) => {
  res.status(200).json({msg: 'Hello World! hello Arpit health4'});
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
