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
    .then(() => recipeApi.listRecipes()
    .then(recipes => allergyApi.listAllergies()
            .then(allergies => userApi.allUsers()
                .then(users => res.render('owner', { allergies, users, recipes })))))
})

router.post("/allergies", (req, res) => {
    allergyApi.createNewAllergy(req.body)
    .then(() => recipeApi.listRecipes()
    .then(recipes => allergyApi.listAllergies()
            .then(allergies => userApi.allUsers()
                .then(users => res.render('owner', { allergies, users, recipes })))))
})


router.get("/recipes", (req, res) => {
    recipeApi.listRecipes().then(recipes => res.send(recipes))
})

router.post("/recipes", (req, res) =>
    recipeApi.createNewRecipe(req.body)
    .then(() => recipeApi.listRecipes()
    .then(recipes => allergyApi.listAllergies()
            .then(allergies => userApi.allUsers()
                .then(users => {
                    console.log(allergies)
                    console.log(users)
                    console.log(recipes)
                    res.render('owner', { allergies, users, recipes })
                }))))
)

router.patch("/recipes/:id", (req, res) => {
    recipeApi.updateRecipe(req.params.id, req.body)
    .then(() => recipeApi.listRecipes()
    .then(recipes => allergyApi.listAllergies()
        .then(allergies => userApi.allUsers()
            .then(users => res.render('owner', { allergies, users, recipes })))))
})

router.delete("/recipes/:id", (req, res) => {
    recipeApi.deleteRecipe(req.params.id)
        .then(() => recipeApi.listRecipes()
        .then(recipes => allergyApi.listAllergies()
            .then(allergies => userApi.allUsers()
                .then(users => res.render('owner', { allergies, users, recipes })))))
})


router.get('/', (req, res) => recipeApi.listRecipes()
    .then(recipes => allergyApi.listAllergies()
        .then(allergies => userApi.allUsers()
            .then(users => res.render('owner', { allergies, users, recipes })))))

module.exports = router