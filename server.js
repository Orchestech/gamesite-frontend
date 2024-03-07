const express = require('express');
const path = require('path');
const httpProxy = require('http-proxy');

const app = express();
const proxy = httpProxy.createProxyServer();

const PORT = 3000;
const API_BACKEND_URL = 'http://gamesite-backend:3000/api';

// Serve static files for React production app
app.use(express.static(path.join(__dirname, 'build')));

// Forward API requests to the backend server
app.use('/api', (req, res) => {
  proxy.web(req, res, { target: API_BACKEND_URL });
});

// Serve React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Handle proxy errors
proxy.on('error', (err, req, res) => {
  console.error(err);
  res.status(500).json({ message: "Server error", errors: [{ msg: 'Server error' }] });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

