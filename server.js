

/* server file does this:
grab dependencies
configure application
set routes
star server */



//boiler code
const express = require('express');
const app = express();
const userController = require('./controllers/user')

//boiler code
//instructs express parse HTML form request properly
app.use(express.json())
app.use(express.urlencoded());

//boiler code when using handlebars
//instructs express use handlebars to render page

app.set('view engine', 'hbs');

//route handler

app.use('/users', userController)

//all users
// app.get('/users', (req, res) => {
//     userApi.getAllUsers()
//         .then(users => {
//             res.render("users/users", { listOUsers: users });
//         });
// });

// //single user
// app.get('/users/:userId', (req, res) => {
//     userApi.getUserById(req.params.userId)
//         .then(user => {
//             res.render("users/users", { user });
//         });
// });

//add app.post to create





//boiler code

const PORT = 3000;
app.listen(PORT, () => {
    console.log("Connected at: " + PORT);
});