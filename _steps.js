/**
 *----------------------------------------------
 * node js with express.js server making steps
 * ---------------------------------------------
 * 1. make a directory with cmd, mkdir dirname and go to dir
 * 2. install npm i express cors dotenv mongodb
 * 3. add to script to the package.json no.1 "start": "node index.js", no.2 "start-dev": "nodemon index.js"
 * 4. make index.js file and .gitignore file and .env file
 * 5. .gitignore will be writen node_modules and next line .env
 * 6. press the command git init
 * 7. go to index.js and require these const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
 * 8. remember use it // middleware
app.use(cors());
app.use(express.json());
 * 9. then 
app.get('/', (req, res) =>{
    res.send('John running and waiting for Ema')
});

app.listen(port, () =>{
    console.log('John is running on port', port);
})
 * if you need http methods link: https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
 *-------------------------------------------------------
 * Api creating CRUD Oparation
 * -------------------------------------------------------
 * 1. create mongodb cluster database and go to database > connect and keep your server connetion code
 * 2. start CRUD Oparation follow this link : https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/#:~:text=CRUD%20(Create%2C%20Read%2C%20Update,documents%20in%20your%20MongoDB%20database.
 * 3. dakho aigula ase naki && make sure require dotenv config ase naki na thakle niche ase
 * const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
 * 4.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 *  **/

// data limiting from server site  follow limit() function
// const products = await cursor.limit(12).toArray();
