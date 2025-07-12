const express = require('express');
const app = express();
const PORT = 3002;

app.get('/api2', (req, res) => {
  console.log('[API2] Received request');
  res.send('Hello World from API2');
});

app.listen(PORT, () => {
  console.log(`[API2] Listening at http://localhost:${PORT}`);
});