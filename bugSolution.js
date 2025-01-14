const express = require('express');
const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  try {
    const data = await fetchDataFromDatabase();
    res.send(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Internal Server Error');
  }
});

async function fetchDataFromDatabase() {
  // Simulate an asynchronous database query
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ message: 'Data from database' });
    }, 2000); // Simulate 2-second delay
  });
}
