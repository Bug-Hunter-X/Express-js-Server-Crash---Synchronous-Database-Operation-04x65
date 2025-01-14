const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // This will cause an error because of the synchronous operation
  const data = fetchDataFromDatabase();
  res.send(data);
});

function fetchDataFromDatabase() {
  // Simulate a database query that takes time
  const start = Date.now();
  while (Date.now() - start < 2000) {
      //Wait
  }
  return { message: 'Data from database' };
}