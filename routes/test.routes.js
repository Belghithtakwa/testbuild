const express = require("express");
const router = express.Router();

router.get('/message', (req, res) =>{
  try{
    let message = "Hello world"
res.status(200).send({message : message});
  }catch{
    res.status(500).send("error get message")
  }
})

module.exports= router;