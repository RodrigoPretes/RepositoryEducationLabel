const express = require('express');
const contentController = require('../controllers/contentController');

const router = express.Router();

router.post('/', contentController.createContent);


module.exports = router;
