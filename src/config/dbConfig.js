const mongodb = require('mongodb').MongoClient;
const cnfg = require('./config')
const ObjectId = require('mongodb').ObjectID;

mongodb.connect(`${cnfg.DB_URI}`,{
  useNewUrlParser:true,useUnifiedTopology:true
},async (err,client)=>{
  try {
    let db = client.db(`${cnfg.DB_NAME}`)
    await console.log('connectDB');


  } catch (err) {
    await console.log(err);
    client.close();
  }
});
