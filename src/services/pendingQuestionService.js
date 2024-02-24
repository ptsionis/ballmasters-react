import axios from "axios";
import { checkIfAuthenticated } from "../utils/authUtils";

export const fetchAllPendingData = async () => {
  try {
    const isAuthenticated = await checkIfAuthenticated();
    if (isAuthenticated) {
      const res = await axios.get(
        "http://localhost:8000/pending-question/all-pending",
        {
          withCredentials: true,
        }
      );
      const allPendingData = res.data;
      return allPendingData;
    }
  } catch (error) {
    console.error("Failed to fetch all questions data:", error);
    return null;
  }
};

export const submitPendingData = async (pendingData) => {
  try {
    const isAuthenticated = await checkIfAuthenticated();
    if (isAuthenticated) {
      const res = await axios.post(
        "http://localhost:8000/pending-question/submit-pending",
        pendingData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      return res.data.success;
    }
  } catch (error) {
    return false;
  }
};
