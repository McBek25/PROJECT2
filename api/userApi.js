const mongoose = require('../DB/connection.js');

const allergy = require('./allergyApi.js');
const recipe = require('./recipeApi.js');

const ObjectId = mongoose.Schema.Types.ObjectId;



//defines shape of entities 
//named customer account on ERD
const UserSchema = mongoose.Schema({
    name: String, 
    username: String,
    status: Boolean,
    allergyId: {type: ObjectId, ref: 'allergySchema'},
});

//create API communicate with "users" collection in mongodb
//let UserCollection = mongoose.model("User", UserSchema);

//need to change all users feature to all allergies for full crud?  bc single user does not need access to all users

//generates all allergy options for user to select
let AllergyCollection = mongoose.model('Allergy', allergySchema);
getAllAllergies() {
    return AllergyCollection.find();
}


//use mongoose's api to get all user documents and returns promis with all user documents
/*function getAllUsers() {
    return UserCollection.find();
}*/

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

