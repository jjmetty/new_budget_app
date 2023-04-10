require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const mongoConnectionString =  process.env.DATABASE_URL;
const routes = require('./routes/routes')
const cors = require('cors')


//db connection
mongoose.set('strictQuery', true);
mongoose.connect(mongoConnectionString);
const db = mongoose.connection;

db.on('error', (error) => {
    console.log(error);
})
db.once('connected', () =>{
    console.log('Database is Connected')
})


//transfer contents of express into app variable
const app = express();

//to allow request to read req.body
app.use(express.json())
app.use(cors());
//routing to /api endpoint
app.use('/api', routes);



app.listen(4000, () => {
    console.log('server is running on port 4000 ')
})