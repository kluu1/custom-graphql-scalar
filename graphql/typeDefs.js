const { gql } = require('apollo-server');

const typeDefs = gql`
  scalar Date

  type Order {
    userId: Int!
    amount: Int!
    createdAt: Date!
  }

  type Mutation {
    addOrder(userId: Int!, amount: Int!): Order
  }

  type Query {
    orders: [Order]
  }
`;

module.exports = typeDefs;