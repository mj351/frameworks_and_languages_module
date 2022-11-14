const express = require('express');
const router = express.Router();

//const mongoose = require ('mongoose')

const ITEMS = require ('../itemsModels')

//const { restart } = require('nodemon')
//const cors = require('cors')
//const app = require('../app')

// Handle incoming GET requests to /item 
router.get("/", (req, res, next) => {
  ITEMS.find()
  .exec()
  .then(docs =>{
    console.log(docs);
   // if (docs.length >= 0) {
    res.status(200).json(docs);
  //} else{
   // res.status(404).json({
   //   message: 'No entries found'
   // })
  //}
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: err
    });
  });
});

// POST
router.post("/", (req, res, next) => {
  const ITEMS = {
    id: newId,
    user_id: req.body.user_id,
    keywords: req.body.keywords,
    description: req.body.description,
    image: req.body.image,
    lat: req.body.lat,
    lon: req.body.lon,
    date_from: new Date,
    date_to: new Date
  };
  res.status(201).json({
    message: 'Handling POST requests to item'
  });
});
  
// GET
router.get("/:itemId", (req, res, next) => {
  const id = re.params.itemId;
  if (id === 'special') {
    res.status(200).json({
      message: 'You discovered the special ID',
      id: id
    });
  } else {
     res.status(200).json({
      message: 'You passed an ID'
     });
  }
});

// DELETE 
router.delete("/:itemId", (req, res, next) => {
  const id = req.params.itemId;
  ITEMS.remove({ _id: id })
  .exec()
  .then(result => {
    res.status(204).json(result);
  })
  .catch(err =>{
    console.log(err);
    res.status(404).json({
      error: err
    });
  });
});

module.exports = router