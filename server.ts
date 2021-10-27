import express from 'express';
import useGraphql from './graphql';

const app = express();

useGraphql(app);

app.listen({ port: 3000 }, () =>
  console.log(`🚀 Server ready at http://localhost:3000`)
);