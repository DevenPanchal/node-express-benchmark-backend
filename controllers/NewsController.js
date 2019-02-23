

const NewsController = {};
const News = require('../models/news.model');

// await indicates wait for the function to get over.
// we may also use Promises in its place
/*
NewsController.getNews = async function(req, res) {
  const allnews = await News.find({});
  res.json(allnews);

};
*/

// This implementation of getNews is using Promises
NewsController.getNews = function (req, res) {

  console.log('Inside getNews');
  sendResponse = function (arg) {
    res.json(arg);
  }

  const allnews = News.find({}, function (err, ns) {
    sendResponse(ns);
  });


};


// ES6 style
NewsController.getSingleNews = async (req, res) => {

  console.log("Inside getSingleNews");
  const selectnews = await News.findById(req.params.id);
  res.json(selectnews);
};


NewsController.createNews = async (req, res) => {
  console.log("Inside createNews");
  console.log(req.body);
  const news = new News(req.body);
  try{
  await news.save();
  }
  catch(error)
  {
    console.log(error);
  }
  res.json({
    'status': 'item saved successfully'
  });
};

NewsController.deleteNews = async (req, res) => {
  console.log("Inside deleteNews");
  await News.findByIdAndRemove(req.params.id);
  res.json({
    'status': 'item deleted successfully'
  })
};


module.exports = NewsController;
