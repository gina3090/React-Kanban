const PORT = process.env.PORT || 9000;
const server = require('./server');
const db = require('./models');

server.listen(PORT, _ => {
  console.log('Server listening on', PORT);
  db.sequelize.sync();
});