const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

console.log(process.env.DB_USER);

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}.mhsbjhf.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri);
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
client.connect((err) => {
  const collection = client.db('test').collection('devices');
  // perform actions on the collection object
  console.log('Database connected with mongoDB');
  client.close();
});

app.get('/', (req, res) => {
  res.send('Genius Car Server is Running.');
});

app.listen(port, () => {
  console.log(`Genious Car server running on: ${port} `);
});

//user: dbuser1
//password: crbZ9NxrEVeK6XCX
