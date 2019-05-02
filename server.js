

/* server file does this:
grab dependencies
configure application
set routes
star server */



//boiler code
const express = require('express');
const app = express();
const userController = require('./controllers/user');
const ownerController = require('./controllers/owner');
const methodOverride = require('method-override')

//boiler code
//instructs express parse HTML form request properly
app.use(express.json())
app.use(express.urlencoded({urlencoded: true}));

//boiler code when using handlebars
//instructs express use handlebars to render page

app.set('view engine', 'hbs');

app.use(methodOverride('_method'))
app.use(express.static(__dirname + '/public'))

//route handler
app.get('/',function(req,res){
    res.send("hello world")
})

app.use('/users', userController);

app.use('/owner', ownerController)

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