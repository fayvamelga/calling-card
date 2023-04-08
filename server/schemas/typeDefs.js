const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type Project {
        _id: ID
        username: String
        title: String
        description: String
    }

    type User {
        _id: ID
        username: String
        email: String
        projects: [Project]
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        findUser(username: String!): User
        findAllProjects(username: String!): [Project]
        findSingleProject(projectId: ID!): Project
    }

    type Mutation {
        createProject(username: String!, title: String!, description: String!): Project

        updateProject(projectId: ID!, title: String!, description: String!): Project

        deleteProject(userId: ID!, projectId: ID!): Project

        createUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;