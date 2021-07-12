import axios from "axios";
import { URL } from "./staticConfig";
class ContactDataService {
  postContact(contact) {
    return axios.post(`${URL}/contacts`, contact);
  }
}
export default new ContactDataService();
