const mongoose = require('../DB/connection.js');

const user = require('./userApi.js');
const recipe = require('./recipeApi.js');

const ObjectId = mongoose.Schema.Types.ObjectId;

//defines shape of entities
const RecipeSchema = mongoose.Schema({
    isRecipe: Boolean,
    containsAllergen: Boolean,
    Return: Boolean,
    Title: String,
    ingredients: [String],
    instructions: [String],
});


const RecipeCollection = mongoose.model('Recipe', RecipeSchema);


//CREATE new recipe (this will be owner only and designated in controller file)
function createNewRecipe(newRecipe) {
    return RecipeCollection.create(newRecipe);
}

//READ recipes
function listRecipes() {
    return RecipeCollection.find();
}

//UPDATE recipe (owner only, designated in controller file)
function updateRecipe(recipeId, recipe) {
    return RecipeCollection.findByIdAndUpdate(recipeId, recipe)
        .then(() => RecipeCollection.findById(recipeId))
}
//patching vs putting in a list of selected recipes

//DELETE recipe (owner only, designated on controller file)
function deleteRecipe(recipeId) {
    return RecipeCollection.findByIdAndDelete(recipeId);
}

module.exports = {
    createNewRecipe,
    listRecipes,
    updateRecipe,
    deleteRecipe,
};

