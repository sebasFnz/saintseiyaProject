const express = require('express');
const app = express()
const config = require('./config/config');

app.use((req,res,next)=>{

  res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next()
})

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/v1',require('./routes/v1/characters.js'));

app.listen(config.PORT,  ()=>{
   console.log(`Running ${config.PORT}`);
})
