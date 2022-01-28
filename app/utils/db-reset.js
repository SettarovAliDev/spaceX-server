const db = require('../models');
const dbConfig = require('../config/db.config');
const Role = db.role;

const initial = () => {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: 'user',
      }).save((err) => {
        if (err) {
          console.log('error', err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: 'admin',
      }).save((err) => {
        if (err) {
          console.log('error', err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
};

module.exports = () =>
  db.mongoose
    .connect(dbConfig.path, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Successfully connect to MongoDB.');
      initial();
    })
    .catch((err) => {
      console.error('Connection error', err);
      process.exit();
    });
