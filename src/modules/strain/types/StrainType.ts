import {
  GraphQLNonNull,
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLInt,
} from 'graphql'

const StrainType = new GraphQLObjectType({
  name: 'Strain',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    description: {
      type: new GraphQLNonNull(GraphQLString),
    },
    type: {
      type: new GraphQLNonNull(GraphQLString),
    },
    isHighCbd: {
      type: new GraphQLNonNull(GraphQLBoolean),
    },
    cannabinoids: {
      type: new GraphQLNonNull(GraphQLString),
    },
    lineage: {
      type: new GraphQLNonNull(GraphQLString),
    },
    imageUrl: {
      type: new GraphQLNonNull(GraphQLString),
    },
    publishedAt: {
      type: new GraphQLNonNull(GraphQLString),
    },
    productCount: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    createdAt: {
      type: new GraphQLNonNull(GraphQLString),
    },
    updatedAt: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
})

export default StrainType
