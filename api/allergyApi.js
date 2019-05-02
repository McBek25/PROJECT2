const mongoose = require('../DB/connection.js');

const user = require('./userApi.js');
const recipe = require('./recipeApi.js');

const ObjectId = mongoose.Schema.Types.ObjectId;

//defines shape of entities
const AllergySchema = mongoose.Schema({
    name: String,
    recipes: [{ type: ObjectId, ref: 'Recipe' }],
});


//const AllergyCollection = require('../model/Allergy.js');
const AllergyCollection = mongoose.model('Allergy', AllergySchema);


/*//generates all allergy options for user to select
let AllergyCollection = mongoose.model('Allergy', allergySchema);

function getAllAllergies() {
    return AllergyCollection.find();
}*/


//CREATE new allergy (this will be owner only and designated in controller)
function createNewAllergy(newAllergy) {
    return AllergyCollection.create(newAllergy)
        .populate('recipes');
}



//READ allergies
function listAllergies() {
    return AllergyCollection.find()
        .populate('recipes');

}




//UPDATE allergy
function updateAllergy(allergyId, allergy) {
    return AllergyCollection.findByIdAndUpdate(allergyId, allergy)
        .then(() => AllergyCollection.findById(allergyId)
            .populate('recipes'));
}

//patching vs putting in a list of selected allergies

//DELETE allergy
function deleteAllergy(allergyId) {
    return AllergyCollection.findByIdAndDelete(allergyId);
}

function findAllergyByName(allergyName) {
    return AllergyCollection.findOne({name: allergyName})
}



module.exports = {
    createNewAllergy,
    listAllergies,
    updateAllergy,
    deleteAllergy,
    findAllergyByName
};
