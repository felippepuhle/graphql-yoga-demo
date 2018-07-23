import { GraphQLServer } from 'graphql-yoga'

import { PORT } from './config'
import { schema } from './schema'

(async () => {
  const server = new GraphQLServer({
    schema,
  })

  server.start({ port: PORT, cacheControl: true }, () =>
    console.log(`GraphQL Server is now running on http://localhost:${PORT}`),
  )
})()
