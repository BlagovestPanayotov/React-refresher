import apiClient from "./api-client";

interface Entity {
  id: number;
}

class HttpService {
  endpoint: string;

  constructor(enpoint: string) {
    this.endpoint = enpoint;
  }

  getAll<T>() {
    const controller = new AbortController();
    const request = apiClient.get<T[]>(this.endpoint, {
      signal: controller.signal,
    });
    return { request, cancel: () => controller.abort() };
  }

  delete<T>(id: number) {
    return apiClient.delete(this.endpoint + id);
  }

  create<T>(entity: T) {
    return apiClient.post(this.endpoint, entity);
  }

  updateUser<T extends Entity>(entity: T) {
    return apiClient.patch(this.endpoint + entity.id, entity);
  }
}

const create = (enpoint: string) => new HttpService(enpoint);

export { create };