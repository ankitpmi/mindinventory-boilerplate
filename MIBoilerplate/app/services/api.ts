import axios, {AxiosInstance} from 'axios';
import {PostsRes} from './Models/PostsModel';

const API_URL = 'https://jsonplaceholder.typicode.com/';

class APIhandler {
  axios: AxiosInstance;
  constructor() {
    this.axios = axios.create({
      baseURL: API_URL,
    });
  }

  getAllPosts = async (): Promise<PostsRes[]> => {
    try {
      const response = await this.axios.get<PostsRes[]>('posts');
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  };
}

const API = new APIhandler();
export default API;
