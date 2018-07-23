import fetch, { Headers, Request, RequestInit, Response } from 'node-fetch'

import { API_URL } from '../config'

interface APIArguments {
  url: string,
  method?: string,
  headers?: Headers,
}

const api = async (args: APIArguments): Promise<Response> => {
  const requestOptions: RequestInit = {
    headers: args.headers || [],
    method: args.method || 'GET',
  }

  const request: Request = new Request(`${API_URL}${args.url}`, requestOptions)

  return fetch(request)
}

export default api
