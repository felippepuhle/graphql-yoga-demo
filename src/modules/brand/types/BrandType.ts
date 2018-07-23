import {
  GraphQLNonNull,
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql'

const BrandType = new GraphQLObjectType({
  name: 'Brand',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    logoUrl: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
})

export default BrandType
