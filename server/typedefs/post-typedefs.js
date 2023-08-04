import { gql } from "apollo-server-express";

export const post_typedefs = gql`
  type Post {
    id: ID!
    title: String!
    body: String!
  }
  type Comment {
    id: ID!
    body: String!
    likes: Int!
    replies: [Comment]
  }
  type PostStats {
    id: ID!
    title: String!
    likes: Int!
    comment_count: Int!
    comments: [Comment]
  }
  type Query {
    get_post(id: ID!): Post
    get_posts: [Post]
    post_stats(id: ID!): PostStats
  }

  input PostInput {
    title: String!
    body: String!
  }

  type Mutation {
    create_post(input: PostInput!): Post
  }
`;
