const dotenv = require('dotenv');
const path = require('path');
dotenv.config({
  path:path.resolve(__dirname,'.env')
});

module.exports = {
  PORT:process.env.PORT,
  DB_URI:process.env.URI_DB ,
  DB_NAME:process.env.NAME_DB,
};
