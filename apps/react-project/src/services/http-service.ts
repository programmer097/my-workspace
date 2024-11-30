const baseUrl = "http://localhost:3000";
const defaultHeaders = {
  "Content-Type": "application/json",
};

export default class HttpService {
  get(path: string, headers?: any): Promise<Response> {
    return fetch(`${baseUrl}/${path}`, {
      method: "GET",
      headers: {
        ...defaultHeaders,
        ...headers,
      },
    });
  }

  post(path: string, payload: any, headers?: any): Promise<Response> {
    return fetch(`${baseUrl}/${path}`, {
      method: "POST",
      headers: {
        ...defaultHeaders,
        ...headers,
      },
      body: JSON.stringify(payload),
    });
  }
}
