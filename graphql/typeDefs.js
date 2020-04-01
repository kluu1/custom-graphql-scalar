const { gql } = require('apollo-server');

const typeDefs = gql`
  type Order {
    userId: Int!
    amount: Int!
    createdAt: String!
  }

  type Mutation {
    addOrder(userId: Int!, amount: Int!): Order
  }

  type Query {
    orders: [Order]
  }
`;

module.exports = typeDefs;