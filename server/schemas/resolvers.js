const { AuthenticationError } = require("apollo-server-express");
const { Project, User } = require("../models");
const { signToken } = require("../utils/Auth");

const resolvers = {
  Query: {
    // Find by username populate projects
    findUser: async (parent, { username }) => {
      const user = await User.findOne({ username: username }).populate({
        path: "projects",
      });
      console.log(user);
      return user;
    },
    // Find by userId sort deck
    findAllProjects: async (parent, { username }) => {
      return Project.find({ username: username })
        .sort({ _id: -1 })

    },
    // Find by deck id populate cards
    findSingleProject: async (parent, { projectId }) => {
      return Project.findOne({ _id: projectId });
    },
  },

  Mutation: {
    createProject: async (parent, { username, title, description }, context) => {
      // if (context.user) {
      // const decks = await Deck.create({
      //     name
      // });
      //   const cardInputs = await Card.collection.insertMany(cards)
      //     console.log("==============", cards, "=====================")
      //     console.log(cardInputs)

      const deck = await Deck.create({  username, title, description });

      // await User.findOneAndUpdate(
      // { _id: context.user._id },
      //     { $addToSet: { deck: decks._id } }
      // );
      await User.findOneAndUpdate(
        { username: username },
        { $addToSet: { projects: project._id } }
      );

      return project;
      // }
      throw new AuthenticationError("You need to be logged in!");
    },
    updateProject: async (parent, { projectId,  title, description  }) => {
      return Project.findOneAndUpdate({ _id: deckId }, {  title, description  }, { new: true });
    },

    deleteProject: async (parent, { userId, projectId }, context) => {
      const project = await Project.findOneAndDelete({
        _id: projectId,
      });

      const updateUser = await User.findOneAndUpdate(
        { _id: userId },
        { $pull: { projects: { $in: [projectId] } } },
        { new: true }
      );

      console.log(updateUser);
      return project;
    },

    createUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      console.log("successfully created " + user);

      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
