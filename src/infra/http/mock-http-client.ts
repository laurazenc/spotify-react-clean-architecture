import { getMockedResponse } from '@/data/mock'
import { HttpClient } from '@/data/protocols/http'

export class MockHttpClient<T> implements HttpClient<T> {
  async request<BodyType>({ url }: HttpClient.Params<BodyType>): Promise<HttpClient.HttpResponse<T>> {
    const response = getMockedResponse(url) as T

    return new Promise(resolve => {
      setTimeout(() => {
        resolve(response)
      }, Math.random() * 2000)
    })
  }
}
