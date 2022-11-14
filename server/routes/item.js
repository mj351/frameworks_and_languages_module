const express = require('express');
const router = express.Router();
const mongoose = require ('mongoose')

const Item = require ('..//itemModels')

//const { restart } = require('nodemon')
//const cors = require('cors')
//const app = require('../app')

// Handle incoming GET requests to /item 
router.get("/", (req, res, next) => {
  Item.find()
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
  const item = new Item({
    _id: new mongoose.Types.ObjectId(),
    userId: string,
    keywords:[],
    description: string,
    image: string,
    lat: number,
    lon: number,
    date_from: string
  });
  item
  .save()
  .then(result => {
    console.log(result);
    res.status(201).json({
      message: "handling POST requests to item"
    });
  })
  .catch(err => {
    console.log(err);
    res.status(405).json({
      error: err
    });
  });
});

// GET
router.get("/:itemId", (req, res, next) => {
  const id = re.params.item;
  Item.findById(id)
  .exec()
  .then(doc => {
    console.log("From database", doc);
    if (doc) {
      res.
      status(200).json(doc);
    } else {
      res.status(404).json({message: "No valid entry found for provided ID"})
    }
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({Error: err});
  });
});

// DELETE 
router.delete("/:itemId", (req, res, next) => {
  const id = req.params.itemId;
  Item.remove({ _id: id })
  .exec()
  .then(result => {
    res.status(200).json(result);
  })
  .catch(err =>{
    console.log(err);
    res.status(500).json({
      error: err
    });
  });
});
module.exports = router