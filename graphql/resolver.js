const orders = require('../data');

const resolvers = {
  Query: {
    orders: (_, args) => {
      return orders;
    }
  },
};

module.exports = resolvers;