const allergyApi = require('../api/allergyApi.js');
const recipeApi = require('../api/recipeApi.js');
const userApi = require('../api/userApi.js');


const ownerView = function(req, res) {
    userApi.allUsers()
        .then((users) => res.send(users));
}

const ownerController = {

}

