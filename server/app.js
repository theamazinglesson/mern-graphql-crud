require('dotenv').config({ path: './config/config.env' });
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./graphql/schema/index');
const mongoose = require('mongoose');
const RootResolvers = require('./graphql/resolver/index');

const app = express();

mongoose.connect(process.env.MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true },()=>console.log('Mongodb is connected'));


app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: RootResolvers,
  graphiql: true,
}));



app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));