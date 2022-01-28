module.exports = {
  path: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@spacex.akfjv.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
};
