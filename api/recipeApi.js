const mongoose = require('../DB/connection.js');

const user = require('./userApi.js');
const recipe = require('./recipeApi.js');

const ObjectId = mongoose.Schema.Types.ObjectId;

//defines shape of entities
const recipesSchema = mongoose.Schema({
    isRecipe: Boolean,
    containsAllergen: Boolean,
    Return: Boolean,
    Title: String,
    ingredients: [string],
    instructions: [string],
});


const RecipeCollection = require('../model/Recipe.js');


//CREATE new recipe (this will be owner only and designated in controller file)
function createNewRecipe(newRecipe) {
    return RecipeCollection.create(newRecipe);
}

//READ recipes
function listRecipes(allRecipe) {
    return RecipeCollection.get(newRecipe);
}

//UPDATE recipe (owner only, designated in controller file)
function updateRecipe(recipeId) {
    return RecipeCollection.put(recipeId);
}
//patching vs putting in a list of selected recipes

//DELETE recipe (owner only, designated on controller file)
function deleteRecipe(recipeId) {
    return RecipeCollection.delete(recipeId);
}

module.exports = {
    createNewRecipe,
    listRecipes,
    updateRecipe,
    deleteRecipe,
};

