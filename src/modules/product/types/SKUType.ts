import {
  GraphQLNonNull,
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLInt,
  GraphQLList,
} from 'graphql'

import MenuType from '../../menu/types/MenuType'
import VariantType from '../../variant/types/VariantType'

const SKUProviderAttributesInventoryType = new GraphQLObjectType({
  name: 'SKUProviderAttributesInventory',
  fields: {
    uuid: {
      type: new GraphQLNonNull(GraphQLString),
    },
    label: {
      type: new GraphQLNonNull(GraphQLString),
    },
    thcMg: {
      type: GraphQLInt,
    },
    thcPercent: {
      type: GraphQLInt,
    },
    cbdMg: {
      type: GraphQLInt,
    },
    cbdPercent: {
      type: GraphQLInt,
    },
    price: {
      type: GraphQLFloat,
    },
    stock: {
      type: GraphQLInt,
    },
  },
})

const SKUProviderAttributesType = new GraphQLObjectType({
  name: 'SKUProviderAttributes',
  fields: {
    productUuid: {
      type: new GraphQLNonNull(GraphQLString),
    },
    inventories: {
      type: new GraphQLList(SKUProviderAttributesInventoryType),
    },
    price: {
      type: GraphQLFloat,
    },
    stock: {
      type: GraphQLInt,
    },
  },
})

const SKUType = new GraphQLObjectType({
  name: 'SKU',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    menuId: {
      type: new GraphQLNonNull(GraphQLID),
    },
    menu: {
      type: new GraphQLNonNull(MenuType),
    },
    variantId: {
      type: new GraphQLNonNull(GraphQLID),
    },
    variant: {
      type: new GraphQLNonNull(VariantType),
    },
    // @TODO: couldn't identify the type here
    attributes: {
      type: GraphQLString,
    },
    providerAttributes: {
      type: new GraphQLNonNull(SKUProviderAttributesType),
    },
    createdAt: {
      type: new GraphQLNonNull(GraphQLString),
    },
    updatedAt: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
})

export default SKUType
