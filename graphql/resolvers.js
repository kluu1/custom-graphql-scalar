const { GraphQLScalarType } = require('graphql') ;
const { Kind } = require('graphql/language');
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
  },

  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Custom date scalar',
    parseValue(value) {
      return value;
    },
    serialize(value) {
      return new Date(Number(value));
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return new Date(ast.value);
      }
      return null;
    }
  })
};

module.exports = resolvers;