var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Yearly = require('../models/Yearly.js');


router.get('/', function(req, res, next) {
  Yearly.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});


router.get('/:id', function(req, res, next) {
  Yearly.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


router.post('/', function(req, res, next) {
  Yearly.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


router.put('/:id', function(req, res, next) {
  Yearly.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


router.delete('/:id', function(req, res, next) {
  Yearly.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;