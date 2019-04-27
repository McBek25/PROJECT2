console.log("Hello");

const /*apivarname*/ = require(/*filepath*/)

//boiler code
const express = require('express');
const app = express();

//boiler code
//instructs express parse HTML form request properly
app.use(express.urlencoded());

//boiler code when using handlebars
//instructs express use handlebars to render page

app.set('view engine', 'hbs');





//boiler code

const PORT = 3000;
app.listen(PORT, () => {
    console.log("Connected at: " + PORT);
});