import express from 'express';
import mongoose from 'mongoose';
import graphqlHTTP from 'express-graphql';

import schema from './graphql'; // usually i use /schema folder instead for naming

const app = express();
const PORT = process.env.PORT || 3000;

//mLab has been used
mongoose.connect('mongodb://sjb3:sjb3@ds137090.mlab.com:37090/graphql-api');
const db = mongoose.connection;
db.on('error', () => console.log('死 failed to connect to the DB!'))
  .once('open', () => console.log('♥ ♥ ♥ ♥ ♥ Now connected to the DB!'));

app.get('/', (req, res) => {
  res.send('Hello, <)))><')
});

// GraphQL API Endpoint
app.use('./graphql', graphqlHTTP( () => ({
  schema,
  graphql: true,
  pretty: true
})));

app.listen(PORT, () => {
  console.log(`>>>>> GraphQL API running on port: ${PORT}`);
})

