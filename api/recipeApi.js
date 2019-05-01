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

