const mongoose = require('../DB/connection.js');

const user = require('./userApi.js');
const recipe = require('./recipeApi.js');

const ObjectId = mongoose.Schema.Types.ObjectId;

//defines shape of entities
const allergySchema = mongoose.Schema({
    name: String,
    recipesId: {type: ObjectId, ref: 'recipesSchema'},
});


const AllergyCollection = require('../model/Allergy.js');



/*//generates all allergy options for user to select
let AllergyCollection = mongoose.model('Allergy', allergySchema);

function getAllAllergies() {
    return AllergyCollection.find();
}*/


//CREATE new allergy (this will be owner only and designated in controller)
function createNewAllergy(newAllergy) {
    return AllergyCollection.create(newAllergy);
}

//READ allergies
function listAllergies(allAllergy) {
    return AllergyCollection.get(newAllergy);
}

//UPDATE allergy
function updateAllergy(allergyId) {
    return AllergyCollection.put(allergyId);
}
//patching vs putting in a list of selected allergies

//DELETE allergy
function deleteAllergy(allergyId) {
    return AllergyCollection.delete(allergyId);
}

module.exports = {
    createNewAllergy,
    listAllergies,
    updateAllergy,
    deleteAllergy,
};
