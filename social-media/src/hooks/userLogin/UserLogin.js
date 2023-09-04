import axios from "axios";

const UserLogin = async (email, password) => {
  try {
    const response = await axios.post("http://localhost:8000/api/auth/login", {
      email: email,
      password: password,
    });

    if (response.data.token) {
      // Assuming the server returns the token in the response.
      const token = response.data.token;
      localStorage.setItem("token", token);
      // You can save the token in local storage or a state variable for later use.

      console.log("Login successful!", token);
      return true;
      // Perform any other actions needed after successful login.
    }
    return false;
  } catch (error) {
    if (error.response) {
      console.log("Login failed:", error.response.data.message);
    } else {
      console.log("Login failed:", error.message);
    }
  }
};
export default UserLogin;
