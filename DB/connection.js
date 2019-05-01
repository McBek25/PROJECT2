/* handles connection to mongodb and sets name of database to be used*/ 
const mongoose = require('mongoose');

const connectionString = "mongodb://localhost/"; //find out how to select file extension and where came from on example code

/* this happened automatically- find out what it is before deleting 
import { connection } from "mongoose"; */

//newUrlParser disables deprication warning (taken from example code, not sure if needed at this point, will debug)
mongoose.connect(connectionString, { useNewUrlParser: true})
    .then(() => {
        console.log("connected to mongo at: " + connectionString);
    });

module.exports = mongoose;



