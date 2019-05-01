const mongoose = require('../DB/connection.js');

const user = require('./userApi.js');
const recipe = require('./recipeApi.js');

const ObjectId = mongoose.Schema.Types.ObjectId;

//defines shape of entities
const allergySchema = mongoose.Schema({
    name: String,
    recipesId: {type: ObjectId, ref: 'recipesSchema'},
});

