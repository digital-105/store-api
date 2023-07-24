const mongoose = require('mongoose');

const config = require('./config')

let mongoConnection;
(async () => {
  try { 
    mongoConnection = await mongoose.connect(`mongodb+srv://${config.mongoUserName}:${config.mongoPassword}@digitaledu-105.upfrfwu.mongodb.net/?retryWrites=true&w=majority`)
    console.log('mongo db connected successfully')
  } catch(e) {
    console.error('unable to connect mongoDb cluster', e)
  }
})();

module.exports = mongoConnection

