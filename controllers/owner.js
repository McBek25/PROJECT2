const allergyApi = require('../api/allergyApi.js');
const recipeApi = require('../api/recipeApi.js');
const userApi = require('../api/userApi.js');

let express = require('express');
let router = express.Router()



router.get("/allergies", (req, res) => {
    allergyApi.listAllergies().then(allergies => res.send(allergies))
})

router.patch("/allergies/:id", (req, res) => {
    allergyApi.updateAllergy(req.params.id, req.body)
        .then(allergy => res.send(allergy))
})

router.delete("/allergies/:id", (req, res) => {
    allergyApi.deleteAllergy(req.params.id)
        .then(() => res.send())
})

router.post("/allergies", (req, res) => {
    allergyApi.createNewAllergy(req.body).then(allergy => res.send(allergy))
})


router.get("/recipes", (req, res) => {
    recipeApi.listRecipes().then(recipes => res.send(recipes))
})

router.post("/recipes", (req, res) => {
    recipeApi.createNewRecipe(req.body)
        .then(recipe => res.send(recipe))
})

router.patch("/recipes/:id", (req, res) => {
    recipeApi.updateRecipe(req.params.id, req.body)
        .then(recipe => res.send(recipe))
})

router.delete("/recipes/:id", (req, res) => {
    recipeApi.deleteRecipe(req.params.id)
        .then(() => res.send())
})



module.exports = router