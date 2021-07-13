import axios from "axios";
import { URL } from "./staticConfig";
class UserCourseDataService {
  getUserCourseByUserId(userId) {
    return axios.get(`${URL}/usercourse/user/${userId}`);
  }
  postUserCourse(userCourse) {
    return axios.post(`${URL}/usercourse`, userCourse);
  }
}

export default new UserCourseDataService();
