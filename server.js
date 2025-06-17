const express = require('express');
const path = require('path');

const port = process.env.PORT || 3000;
const app = express();

// Serve static files from the 'out' directory
app.use(express.static(path.join(__dirname, 'out')));

// Handle all routes by serving index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'out', 'index.html'));
});

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`> Static server running on http://localhost:${port}`);
}); 