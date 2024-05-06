
const express = require('express');
const router = express.Router();

//  route to render the React component
router.get('/', (req, res) => {
  res.render('App');
});

module.exports = router;
