const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3001;

app.get('/api1', async (req, res) => {
  console.log('[API1] Received request');
  try {
    const response = await axios.get('http://api2:3002/api2');
    console.log('[API1] Received response from API2:', response.data);
    res.send(`API1 says: ${response.data}`);
  } catch (err) {
    console.error('[API1] Error:', err.message);
    res.status(500).send('Error contacting API2');
  }
});

app.listen(PORT, () => {
  console.log(`[API1] Listening at http://localhost:${PORT}`);
});