const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require("graphql");

const productType = new GraphQLObjectType({
  name: "Product",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
  }),
});

const rootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    Product: {
      type: productType,
      resolve: (parent: any, args: any) => {
        return {
          id: "demo",
          name: "Bupendra jogi",
        };
      },
    },
  },
});

const rootMutation = new GraphQLObjectType({
  name: "RootMutation",
});

module.exports = new GraphQLSchema({
  query: rootQuery,
  //   mutation: rootMutation,
});
