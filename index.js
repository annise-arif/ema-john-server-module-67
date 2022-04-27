const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;


// middleware
app.use(cors());
app.use(express.json());

//mongodb connection
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.03duu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

//api creating
async function run() {
    try{
        client.connect();
        const productCollection = client.db("emaJohn").collection("product");

        //getting data from mongodb
        app.get('/service', async(req, res) =>{
            // console.log('query', req.query);
            const page = parseInt(req.query.page);
            const size = parseInt(req.query.size);

            const query = {};
            const cursor = productCollection.find(query);
            let products;
            if(page || size){
                // 0 --> skip: 0 get: 0-10 (10):
                // 1 --> skip: 1*10 get: 11-20 (10):
                // 2 --> skip: 2*10 get: 21-30 (10):
                // 3 --> skip: 3*10 get: 31-30 (10):
                products = await cursor.skip(page*size).limit(size).toArray();
            }
            else{
               products = await cursor.toArray();
            }
            res.send(products)
        });

        // count product
        app.get('/productCount', async(req, res) =>{
            const count = await productCollection.estimatedDocumentCount();
            res.send({count});
        });

        // use post to get products by ids
        app.post('/productByKeys', async(req, res) =>{
            const keys = req.body;
            const ids = keys.map(id => ObjectId(id));
            const query = {_id: { $in: ids}}
            const cursor = productCollection.find(query);
            const products = await cursor.toArray();
            res.send(products);
        });
    }
    finally{

    }
}
run().catch(console.dir);


//express server test route and listener to localhost 500
app.get('/', (req, res) =>{
    res.send('John running and waiting for Ema')
});

app.listen(port, () =>{
    console.log('John is running on port', port);
})