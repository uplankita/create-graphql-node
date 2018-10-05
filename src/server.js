// HTTP SERVER
import express from 'express';
import cors from 'cors';

// GraphQL - Apollo
import apollo from './graphql';

// Mongoose

import mongoose from 'mongoose'


// Config
import config from './config';

const app = express();

app.use(cors({
    origin: config.corsDomain, // Be sure to switch to your production domain
    optionsSuccessStatus: 200
}));

// Endpoint to check if the API is running
app.get('/api/status', (req, res) => {
    res.send({ status: 'ok' });
});

// Connecting to the database

mongoose.connect('mongodb://localhost/graphqlServer',{ useNewUrlParser: true });
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', function () {
    console.log("Database connected successfully")
})


apollo.applyMiddleware({app});

app.listen({ port: config.port }, () =>
  console.log(`🚀 Server ready at http://localhost:${config.port}/${apollo.graphqlPath}`)
)