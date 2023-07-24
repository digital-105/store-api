const { MONGO_USERNAME, MONGO_PASSWORD } = process.env;

module.exports = {
  mongoUserName: MONGO_USERNAME,
  mongoPassword: MONGO_PASSWORD,
}