const sequelize = require('./models/sequelize');

exports.Chat = require('./models/chat');
exports.Sensor = require('./models/sensor');

exports.sync = (options) => {
  return sequelize.sync(options);
};

exports.transaction = (options) => {
  return sequelize.transaction(options);
};
