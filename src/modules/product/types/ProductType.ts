import {
  GraphQLNonNull,
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLInt,
} from 'graphql'

import StrainType from '../../strain/types/StrainType'
import BrandType from '../../brand/types/BrandType'

const ProductType = new GraphQLObjectType({
  name: 'Product',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    strainId: {
      type: GraphQLID,
    },
    strain: {
      type: StrainType,
    },
    brandRef: {
      type: new GraphQLNonNull(GraphQLString),
    },
    brand: {
      type: new GraphQLNonNull(BrandType),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    description: {
      type: new GraphQLNonNull(GraphQLString),
    },
    derivation: {
      type: GraphQLString,
    },
    imageUrl: {
      type: GraphQLString,
    },
    extraImageUrls: {
      type: new GraphQLList(GraphQLString),
    },
    videoUrls: {
      type: new GraphQLList(GraphQLString),
    },
    category: {
      type: new GraphQLNonNull(GraphQLString),
    },
    type: {
      type: GraphQLString,
    },
    psychoactive: {
      type: GraphQLString,
    },
    cbdThcRatio: {
      type: GraphQLString,
    },
    highCbd: {
      type: GraphQLBoolean,
    },
    locations: {
      type: new GraphQLList(GraphQLString),
    },
    publishedAt: {
      type: new GraphQLNonNull(GraphQLString),
    },
    averageRating: {
      type: GraphQLFloat,
    },
    reviewCount: {
      type: GraphQLInt,
    },
    createdAt: {
      type: new GraphQLNonNull(GraphQLString),
    },
    updatedAt: {
      type: new GraphQLNonNull(GraphQLString),
    },
    watermark: {
      type: GraphQLString,
    },
  },
})

export default ProductType
