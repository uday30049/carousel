const express = require('express');
const app = express();
const port = 3000;

const carouselData = require('./carouselData.json');

app.get('/api/carousel', (req, res) => {
  res.json(carouselData);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
