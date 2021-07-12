class AuthenticationService {
  registerUserLogin(id, email) {
    // console.log("registerSuccesfulLogin");
    sessionStorage.setItem("userEmail", email);
    sessionStorage.setItem("userId", id);
    sessionStorage.setItem("userRole", "user");
  }
  registerAdminLogin(id, email) {
    // console.log("registerSuccesfulLogin");
    sessionStorage.setItem("userEmail", email);
    sessionStorage.setItem("userId", id);
    sessionStorage.setItem("userRole", "admin");
  }
  logout() {
    sessionStorage.removeItem("userEmail");
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("userRole");
  }
  isUserLoggedIn() {
    let email = sessionStorage.getItem("userEmail");
    if (email === null) return false;
    return true;
  }
  isUserUser() {
    if (this.isUserLoggedIn() && sessionStorage.getItem("userRole") === "user")
      return true;
    else return false;
  }
  isUserAdmin() {
    if (this.isUserLoggedIn() && sessionStorage.getItem("userRole") === "admin")
      return true;
    else return false;
  }
}
export default new AuthenticationService();
