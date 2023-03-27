const express = require('express');
const router = express.Router();
const db = require('../../config/dbConfig');

router.get('/getAll',async(req,res)=>{
  try {
    let characters = await db.getAllCharacters()
    res.status(200).send({success:true,msg:characters})
  } catch (err) {
    res.status(500).send({success:false,msg:"Error try more late"})
  }
})

router.get('/getId/:idCharacter',async(req,res)=>{
  try {
    let id = req.params.idCharacter.length
    if (req.params.idCharacter.length != 24 ) {
        res.status(404).send({success:false,msg:'Error try more late'})
    }else {
      let characters = await db.getCharacterByID(req.params.idCharacter)
      res.status(200).send({success:true,msg:characters})
    }
  } catch (err) {
    res.status(500).send({success:false,msg:"Error try more late"})
  }
})

module.exports = router;
