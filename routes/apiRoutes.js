const express = require('express')
const router = express.Router()

const Article = require('../models/Article.js');

router.get("/saved", function(req, res) {

  Article.find({})
    .then((articles) => { res.json(articles) })
    .catch((err) => {  res.json(err)})

})

router.post("/save", function(req, res) {
  Article.create(JSON.parse(req.body))
    .then((dbArticle) => { res.json(dbArticle) })
    .catch((err) => {  res.json(err)})
})

router.post("/delete/:id", function(req, res) {

  Article.remove({id: req.params.id})
    .then((dbArticle) => { res.json(dbArticle) })
    .catch((err) => {  res.json(err)})

})

module.exports = router
