import { checkIfAuthenticated } from "../utils/authUtils";

export const fetchUserData = async () => {
  try {
    const isAuthenticated = await checkIfAuthenticated();
    if (isAuthenticated) {
      const res = await fetch(
        "http://localhost:8000/user/profile",
        {
          credentials: "include",
        }
      );
      const data = await res.json();
      return data.profile;
    }
  } catch (error) {
    console.error("Failed to fetch user data:", error);
    return null;
  }
};
