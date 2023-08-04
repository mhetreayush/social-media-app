import { gql } from "apollo-server-express";

export const user_typedefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
  }
  type Count {
    posts: Int!
    followers_count: Int!
    following_count: Int!
  }
  type UserStats {
    id: ID!
    count: Count
    followers_accounts: [User]
    following_accounts: [User]
  }
  type Query {
    get_user(id: ID!): User
    get_users: [User]
    user_stats(id: ID!): UserStats
  }
  type Mutation {
    create_user(id: ID!): User
  }
`;
