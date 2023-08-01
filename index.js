const express = require('express');
const app = express();
const Person = require('./model/person')
// import { personSchema } from './model/person';
const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());
// app.use(express.json());
const port = 8080;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// const persons = [{
//     firstname: 'pooja',
//     lastname: 'reddy'
// },
// {
//     firstname: 'pooja1',
//     lastname: 'reddy1'
// },
// {
//     firstname: 'pooja2',
//     lastname: 'reddy2'
// }]
// mongoose.connect("mongodb://127.0.0.1/my_database", { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('Connected to MongoDB...'))
//     .catch(err => console.log('Could not connect to MongoDB...', err));

const uri = "mongodb+srv://poojareddykadari:UWOcvTfpApEpourT@cluster0.dvkdduz.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client =  mongoose.connect(uri,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     // await client.close();
//   }
// }
// run().catch(console.dir);

app.post('/api/v1/resources', (req, res) => {
    console.log(req.body, "request");
    console.log({Person})
    // const person = mongoose.model(personSchema);
    const newPerson = new Person({first_name: req.body.first_name, last_name: req.body.last_name, country: req.body.country, gender: req.body.gender});

  newPerson.save((err, result)=> {
      if(err) console.log(err);
      else console.log(result);
  })
});


app.post('/person', (req, res)=>{
    res.json(person);
});
app.get('/persons', (req, res)=>{res.send(persons)})
app.listen(port, ()=>{console.log("test")});

