const express = require('express');
const router = express.Router();
var newsController = require('../controllers/NewsController')

router.get('/news/:id', newsController.getSingleNews);
router.get('/news', newsController.getNews);
router.post('/news', newsController.createNews);
router.delete('/news/:id', newsController.deleteNews);

module.exports = router;
