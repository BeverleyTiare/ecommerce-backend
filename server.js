const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);
// sequelize.authenticate().t
const main = async () => {
  console.log(sequelize.config)
  await sequelize.authenticate();
  await sequelize.sync({ force: false });
  app.listen(PORT, () => console.log('Now listening'));
};
main()

