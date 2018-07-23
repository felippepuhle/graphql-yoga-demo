import { GraphQLSchema } from 'graphql'

import RootQuery from './modules/root/RootQuery'

const schemaDefinition = {
  query: RootQuery,
}

export const schema = new GraphQLSchema(schemaDefinition)
