import axios from "axios";
import { URL } from "./staticConfig";
class ContactDataService {
  postContact(contact) {
    return axios.post(`${URL}/contacts`, contact);
  }
  getAllContact() {
    return axios.get(`${URL}/contacts`);
  }
}
export default new ContactDataService();
