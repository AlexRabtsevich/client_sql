import axios, { AxiosInstance } from 'axios';

const BASE_URL = 'http://127.0.0.1:8080/';

export class BasicApi {
  protected https: AxiosInstance;

  constructor() {
    this.https = axios.create({
      baseURL: BASE_URL,
    });
  }
}
