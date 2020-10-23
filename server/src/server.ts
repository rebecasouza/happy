import express from 'express';
import './database/connection';

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'hello' });
});

app.listen(3000);
