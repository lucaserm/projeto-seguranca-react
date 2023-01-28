const express = require('express');
const cors = require('cors');
const db = require('./database/sequelize');
const routes = require('./routes')

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use(routes);

db.sync().then(() => {
  app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });
});
