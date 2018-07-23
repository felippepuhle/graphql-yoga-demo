import {
  GraphQLNonNull,
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLList,
} from 'graphql'

const MenuProviderAttributesType = new GraphQLObjectType({
  name: 'MenuProviderAttributes',
  fields: {
    uuid: {
      type: new GraphQLNonNull(GraphQLString),
    },
    salesTaxPercent: {
      type: new GraphQLNonNull(GraphQLFloat),
    },
  },
})

const MenuType = new GraphQLObjectType({
  name: 'Menu',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    provider: {
      type: new GraphQLNonNull(GraphQLString),
    },
    providerAttributes: {
      type: new GraphQLNonNull(MenuProviderAttributesType),
    },
    published: {
      type: new GraphQLNonNull(GraphQLBoolean),
    },
    locations: {
      type: new GraphQLList(GraphQLString),
    },
    createdAt: {
      type: new GraphQLNonNull(GraphQLString),
    },
    updatedAt: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
})

export default MenuType
