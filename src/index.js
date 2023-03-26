const express = require('express');
const app = express()
const config = require('./config/config');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/v1',require('./routes/v1/characters.js'));

app.listen(config.PORT,  ()=>{
   console.log(`Running ${config.PORT}`);
})
