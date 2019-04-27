const mongoose = require('./connection.js');

//defines shape of entities 
const UserSchema = mongoose.Schema({
    name: String //commas on all but last, believe
});

//create API communicate with "users" collection in mongodb
let UserCollection = mongoose.model("User", UserSchema);

/*functions 

here*/

module.exports = {
    //function names, comma on all but last
};

