import express from 'express';
import next from 'next';
import { MongoClient } from 'mongodb';

require('dotenv').config();

const port = 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const uri = `mongodb+srv://jasonoverby:${process.env.MONGO_PW}@cluster0-dgqpc.mongodb.net/test?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect((err) => {
  const collection = client.db('test').collection('devices');
  // perform actions on the collection object
  client.close();
});

app.prepare().then(() => {
  const server = express();

  server.all('*', (req, res) => {
    console.log(process.env.TEST);
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
