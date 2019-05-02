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
    allergy: {type: ObjectId, ref: 'Allergy'},
});

//create API communicate with "users" collection in mongodb
// (i think this goes in model files) let UserCollection = mongoose.model("User", UserSchema);
//take out bc single user does not need access to all users
//use mongoose's api to get all user documents and returns promise with all user documents
/*function getAllUsers() {
    return UserCollection.find();
}*/

const UserCollection = mongoose.model('User', UserSchema);


//CREATE new user
function createNewUser(newUser) {
    return UserCollection.create(newUser)
    .populate("allergy");
}
//above is also POST which will be used in router (if you have one) or controller files (or maybe server?)

//update function and name from atm example
/* function getUserById(userId) {
    return UserCollection.findById(userId);
} */
//READ single user
function singleUser(userId) {
    return UserCollection.findById(userId)    
    .populate("allergy");
}

//READ all users (for owner only and designated in controller)
function allUsers(){
    return UserCollection.find()
    .populate("allergy");
}

//UPDATE/REPLACE single user (like name or username)
function updateUser(userId, user) {
    return UserCollection.findByIdAndUpdate(userId, user)
        .then(() => UserCollection.findById(userId).populate("allergy"))
}
//why not patch?^


//DELETE user account
function deleteUser(userId) {
    return UserCollection.findByIdAndDelete(userId);
}

module.exports = {
    createNewUser,
    singleUser,
    allUsers,
    updateUser,
    deleteUser,
};

