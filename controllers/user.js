const allergyApi = require('../api/allergyApi.js');
const recipeApi = require('../api/recipeApi.js');
const userApi = require('../api/userApi.js');

let express = require('express');
let router = express.Router()



router.get("/", (req, res) => {
    userApi.allUsers().then(users => res.render('users/allUsers', { users }))
})

router.get("/:userId", (req, res) => {
    userApi.singleUser(req.params.userId).then(user => {
        res.render('users/singleUser', { user })
    })
})

router.post("/", (req, res) => {
    userApi.createNewUser(req.body)
        .then(user => res.render('users/singleUser', {user}))
})

router.delete("/:userId", (req, res) => {
    userApi.deleteUser(req.params.userId)
    .then(() => userApi.allUsers())
    .then(users => res.render('users/allUsers', {users}))
})

router.patch("/:userId", (req, res) => {
    userApi.updateUser(req.params.userId, req.body)
        .then(user => res.send(user))
})

router.post("/:userId/recipes", (req, res) => {
    allergyApi.findAllergyByName(req.body.allergy)
        .then(allergy => {
            if (allergy == null) {
                console.log("No allergy found")
                recipeApi.listRecipes().then(recipes => res.render('users/searchResult', {recipes}))
            } else {
                console.log("User has an allergy", allergy)
                userApi.updateUser(req.params.userId, { allergy: allergy._id })
                .then(() => res.render('users/searchResult', {recipes: allergy.recipes})                )
            }
        })
})


module.exports = router

