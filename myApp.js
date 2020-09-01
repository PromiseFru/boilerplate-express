
var express = require('express');
const dotenv = require("dotenv");
var app = express();

dotenv.config();

let data = {
    "message": "Hello json"
}

// --> 7)  Mount the Logger middleware here
app.use(logger);


// --> 11)  Mount the body-parser middleware  here


/** 1) Meet the node console. */
console.log("Hello World");


/** 2) A first working Express Server */
// app.get("/", (req, res) => {
 //  res.send("Hello Express");
// })


/** 3) Serve an HTML file */
var view_path = __dirname + "/views/index.html";
app.get('/', (req, res) => {
    res.sendFile(view_path);
})


/** 4) Serve static assets  */
var public_path = __dirname + "/public";
app.use(express.static(public_path));


/** 5) serve JSON on a specific route */
app.get('/json', env);

/** 6) Use the .env file to configure the app */
 function env(req, res){
    if(process.env.MESSAGE_STYLE === "uppercase") {
        data.message = data.message.toUpperCase()
        res.json(data)
    }else{
        res.json(data);
    }
}
 
/** 7) Root-level Middleware - A logger */
//  place it before all the routes !
function logger(req, res, next) {
    console.log(req.method + ' ' + req.path + ' - ' + req.ip);

    next();
}

/** 8) Chaining middleware. A Time server */
app.get("/now", (req, res, next) => {
    req.time = Date().toString();

    next()
}, (req, res) => {
    res.json("Time: " + req.time);
})

/** 9)  Get input from client - Route parameters */


/** 10) Get input from client - Query parameters */
// /name?first=<firstname>&last=<lastname>

  
/** 11) Get ready for POST Requests - the `body-parser` */
// place it before all the routes !


/** 12) Get data form POST  */



// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
/** app.listen(process.env.PORT || 3000 ); */

//---------- DO NOT EDIT BELOW THIS LINE --------------------

 module.exports = app;
