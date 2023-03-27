const express = require('express');
const router = express.Router();
const db = require('../../config/dbConfig');

router.get('/getAll',async(req,res)=>{
  try {
    let characters = await db.getAllCharacters()
    res.status(200).send({success:true,msg:characters})
  } catch (err) {
    res.status(500).send({success:true,msg:"hello"})
  }
})

module.exports = router;
