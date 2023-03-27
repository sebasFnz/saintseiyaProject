const mongodb = require('mongodb').MongoClient;
const cnfg = require('./config')
const ObjectId = require('mongodb').ObjectID;

mongodb.connect(`${cnfg.DB_URI}`,{
  useNewUrlParser:true,useUnifiedTopology:true
},async (err,client)=>{
  try {
    let db = client.db(`${cnfg.DB_NAME}`)
    await console.log('connectDB');

    exports.getAllCharacters = async function () {
      let characters = await db.collection("character").find({}).project({_id:1,name:1}).toArray()
      return characters;
    };

    exports.getCharacterByID =  async function (id) {
      let filter = {'_id':ObjectId(`${id}`)}
      let character = await db.collection("character").findOne(filter)
      return character;
    }


  } catch (err) {
    await console.log(err);
    client.close();
  }
});
