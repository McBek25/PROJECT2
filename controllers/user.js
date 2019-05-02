const allergyApi = require('../api/allergyApi.js');
const recipeApi = require('../api/recipeApi.js');
const userApi = require('../api/userApi.js');

let express = require('express');
let router = express.Router()



router.get("/", (req, res) => {
    userApi.allUsers().then(users => res.render('users/allUsers', {users}))
})

router.get("/:userId", (req, res) => {
    userApi.singleUser(req.params.userId).then(user => res.send(user))
})

router.post("/", (req, res) => {
    userApi.createNewUser(req.body)
    .then(user => res.send(user))
})

router.delete("/:userId", (req, res) => {
    userApi.deleteUser(req.params.userId).then(() => res.send())
})

router.patch("/:userId", (req, res) => {

    userApi.updateUser(req.params.userId, req.body)
        .then(user => res.send(user))
})


module.exports = router

