import { FetchHttpClient } from '@/infra/http'
import { MockHttpClient } from '@/infra/http/mock-http-client'

export const makeHttpClient = <T>() => {
  // Based on environment return mocked server or FetchHttpClient
  if (process.env.NODE_ENV === 'development') return new MockHttpClient<T>()
  return new FetchHttpClient<T>()
}
