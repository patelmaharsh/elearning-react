import axios from "axios";
import { URL } from "./staticConfig";
class UserDataService {
  getAllUsers() {
    return axios.get(`${URL}/users`);
  }
  postUser(user) {
    return axios.post(`${URL}/users`, user);
  }
  getUserByEmail(email){
    return axios.get(`${URL}/users/${email}`);
  }
}
export default new UserDataService();
