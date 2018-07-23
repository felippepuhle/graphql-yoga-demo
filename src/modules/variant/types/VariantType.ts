import {
  GraphQLNonNull,
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql'

import ProductType from '../../product/types/ProductType'

const VariantType = new GraphQLObjectType({
  name: 'Variant',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    productId: {
      type: new GraphQLNonNull(GraphQLID),
    },
    product: {
      type: new GraphQLNonNull(ProductType),
    },
    size: {
      type: GraphQLString,
    },
    aroma: {
      type: GraphQLString,
    },
    flavor: {
      type: GraphQLString,
    },
    color: {
      type: GraphQLString,
    },
    dose: {
      type: GraphQLString,
    },
  },
})

export default VariantType
