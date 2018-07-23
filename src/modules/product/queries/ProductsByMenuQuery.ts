import {
  GraphQLNonNull,
  GraphQLID,
  GraphQLList,
  GraphQLInt,
} from 'graphql'

import api from '../../../api/api'
import SKUType from '../types/SKUType'

export default {
  type: new GraphQLList(SKUType),
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    page: {
      type: GraphQLInt,
    },
    perPage: {
      type: GraphQLInt,
    },
  },
  resolve: async (
    _,
    {
      id,
      page = 0,
      perPage = 20,
    },
  ) => {
    const response = await api({
      url: `marketplace/menus/${id}/products?page=${page}&perPage=${perPage}`,
    })

    return response.json()
  },
}
