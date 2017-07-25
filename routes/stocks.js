var express = require('express');
var router = express.Router();

var Stock = require('../models/stock');


router.get('/', function(req, res) {
  Stock.find()
.exec(function(err, stocks) {
  if (err) {
    return res.status(500).json({
      title: "An error occured",
      error: err
    })
  }
  res.status(200).json({
    message: "stocks found!",
    obj: stocks
  })
})
})

router.post('/', function(req, res) {
  Stock.findOne({name: req.body.name}, function(err, stock) {
    if (err) {
      return res.status(500).json({
        title: "an error occured",
        error: err
      })
    }
    if (!stock) {
      var newstock = new Stock({
        name: req.body.name,
        data: req.body.data,
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        desc: req.body.desc,
        today: req.body.today
      })
      newstock.save(function(err, newstock) {
        if (err) {
          return res.status(500).json({
            title: 'an error occured',
            error: err
          })
        }
        res.status(200).json({
          message: "stock successfully saved",
          obj: newstock
        })
      })
    }
    if (stock) {
      if (stock.name === req.body.name) {
        return res.status(500).json({
          title: 'You already entered this stock',
          error: {message: "You cannot enter the same stock twice"}
        })
      }
    }
  })
})


router.delete('/:id', function(req, res) {
  Stock.findById(req.params.id, function(err, stock) {
    if (err) {
      return res.status(500).json({
        title: "an error occured",
        error: err
      })
    }
    if (!stock) {
      return res.status(500).json({
        title: "stock not found",
        error: {message: "stock not found"}
      })
    }
    stock.remove(function(err, stock) {
      if (err) {
        return res.status(500).json({
          title: "an error occured",
          error: err
        })
      }
      res.status(200).json({
        message: "stock deleted",
        obj: stock
      })
    })
  })
})




module.exports = router;
