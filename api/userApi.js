const mongoose = require('./connection.js');

//defines shape of entities 
const UserSchema = mongoose.Schema({
    name: String //commas on all but last, believe is correct syntax
});

//create API communicate with "users" collection in mongodb
let UserCollection = mongoose.model("User", UserSchema);



//use mongoose's api to get all user documents and returns promis with all user documents
function getAllUsers() {
    return UserCollection.find();
}

function createNewUser(newUserData) {
    return UserCollection.create(newUserData);
}

function getUserById(userId) {
    return UserCollection.findById(userId);
}

module.exports = {
    getAllUsers,
    createNewUser,
    getUserById

};

