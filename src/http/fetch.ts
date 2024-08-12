
interface FetchParams<T = unknown> {
  urlBase: string,
  method: MethodsFetch,
  headers?: HeadersInit,
  body?: T,
}

type MethodsFetch = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

export async function fetchData({ urlBase, body, method, headers }: FetchParams) {
  const url = `${urlBase}`;

  const requestHeaders = headers ? headers : {
    'Content-Type': 'application/json',
  };

  const requestBody = body ? JSON.stringify(body) : null;

  const fetchOptions: RequestInit = {
    method,
    headers: requestHeaders,
    body: requestBody,
  };

  try {
    const response = await fetch(url, fetchOptions)

    if (!response.ok) return { status: response.status }

    if (method === 'GET') {
      const res = await response.json()

      return { data: res, status: response.status }
    }

    return response;
  } catch (error) {
    return { message: error, status: 500 }
  }
}