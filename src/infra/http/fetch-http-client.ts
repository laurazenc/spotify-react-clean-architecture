import { HttpClient } from '@/data/protocols/http'

export class FetchHttpClient<T> implements HttpClient<T> {
  async request<BodyType>({
    url,
    method,
    body,
    headers,
  }: HttpClient.Params<BodyType>): Promise<HttpClient.HttpResponse<T>> {
    let response: T
    try {
      const config: RequestInit = {
        method,
      }

      if (headers) config.headers = headers
      if (body) config.body = JSON.stringify(body)

      const httpResponse = await fetch(url, config)

      response = await httpResponse.json()
    } catch (error) {
      response = error.response
    }

    return response
  }
}
