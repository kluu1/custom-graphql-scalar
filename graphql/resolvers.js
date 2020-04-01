const orders = require('../db');

const resolvers = {
  Query: {
    orders: (_, args) => {
      return orders;
    }
  },

  Mutation: {
    addOrder: (_, { userId, amount }) => {
      const newOrder = {
        userId,
        amount,
        createdAt: Date.now()
      }
      orders.push(newOrder);

      return newOrder;
    }
  }
};

module.exports = resolvers;