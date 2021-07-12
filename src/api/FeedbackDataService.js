import axios from "axios";
import { URL } from "./staticConfig";
class FeedbackDataService {
  postFeedback(feedback) {
    return axios.post(`${URL}/feedbacks`,feedback);
  }
}
export default new FeedbackDataService();
