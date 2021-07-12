import axios from "axios";
import { URL } from "./staticConfig";
class AdminDataService {
  getAdminByEmail(email) {
    return axios.get(`${URL}/admin/${email}`);
  }
}
export default new AdminDataService();
