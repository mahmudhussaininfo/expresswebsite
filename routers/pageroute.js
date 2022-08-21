
const express = require('express');
const path = require('path');
const { homepage, aboutpage, blogpage } = require('../controllers/controller');
const { marriage, currcheck } = require('../controllers/helpercontroller');

// router init
const router = express();

// express module
module.exports = router;

// Router get folder
router.get('/', homepage);
router.get('/contact', aboutpage);
router.get('/blog', blogpage);
router.post('/agecheck', marriage);
router.get('/currency/:dollar', currcheck);