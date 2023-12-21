import axios from "axios";
import { checkIfAuthenticated } from "../utils/authUtils";

export const fetchUserData = async () => {
  try {
    const isAuthenticated = await checkIfAuthenticated();
    if (isAuthenticated) {
      const response = await axios.get("http://localhost:8000/user/profile", {
        withCredentials: true,
      });
      const userData = response.data;
      return userData;
    }
  } catch (error) {
    console.error("Failed to fetch user data:", error);
    return null;
  }
};
