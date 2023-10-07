import axios from "axios";
import { ITodo } from "../app.interface";

class TodoService {
  private URL = "https://jsonplaceholder.typicode.com/todos";

  async getAll() {
    return axios.get<ITodo[]>(this.URL);
  }

  async getById(id: string) {
    return axios.get<ITodo>(`${this.URL}/${id}`);
  }
}

export default new TodoService();
