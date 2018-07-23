import { GraphQLObjectType } from 'graphql'

import ProductsByMenuQuery from '../product/queries/ProductsByMenuQuery'

export default new GraphQLObjectType({
  name: 'RootQuery',
  description: 'Root Query',
  fields: {
    productsByMenu: ProductsByMenuQuery,
  },
})
