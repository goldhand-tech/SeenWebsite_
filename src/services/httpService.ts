import apiClient from "./apiClient";

class HttpService {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  checkResetCredentials() {
    const controller = new AbortController();
    const req = apiClient.post<boolean>(this.endpoint, {
      signal: controller.signal,
    });
    return { cancel: () => controller.abort(), req };
  }
}

const create = (endpoint: string) => new HttpService(endpoint);

export default create;
