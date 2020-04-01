const { gql } = require('apollo-server');

const typeDefs = gql`
  type Orders {
    _id: String!
    userId: Int!
    amount: Int!
    tax: Int!
    createdAt: String
  }

  type Query {
    orders: [Orders]
  }
`;

module.exports = typeDefs;