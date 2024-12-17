const mongoose = require('mongoose');

//connection logic
mongoose.connect(process.env.CONN_STRING);

const db = mongoose.connection;

db.on('connected',()=>{
    console.log('DB connection successful');
})

db.on('err',(err)=>{
    console.log('Error connecting to DB',err)
})

module.exports = db;

