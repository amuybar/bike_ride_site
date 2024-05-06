// index.js

const express = require('express');
const path = require('path');
const app = express();
const routes = require('./routes/index');

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Set the view engine to render React components
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// Use routes defined in the routes folder
app.use('/', routes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
