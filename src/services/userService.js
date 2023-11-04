import { checkIfAuthenticated } from "../utils/authUtils";

export const getProfile = async () => {
  try {
    const isAuthenticated = await checkIfAuthenticated();
    if (isAuthenticated) {
      const response = await fetch(
        "http://localhost:8000/user/profile",
        {
          credentials: "include",
        }
      );
      const data = await response.json();
      return data.profile;
    }
  } catch (error) {
    console.error("Failed to fetch user profile:", error);
    return null;
  }
};
