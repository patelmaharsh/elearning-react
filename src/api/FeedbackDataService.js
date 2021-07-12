import axios from "axios";
import { URL } from "./staticConfig";
class FeedbackDataService {
  postFeedback(feedback) {
    return axios.post(`${URL}/feedbacks`, feedback);
  }
  getAllFeedback() {
    return axios.get(`${URL}/feedbacks`);
  }
}
export default new FeedbackDataService();
