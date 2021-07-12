import axios from "axios";
import { URL } from "./staticConfig";
class CourseDataService {
  getAllCourses() {
    return axios.get(`${URL}/courses`);
  }
  postCourse(course) {
    return axios.post(`${URL}/courses`, course);
  }
}
export default new CourseDataService();
