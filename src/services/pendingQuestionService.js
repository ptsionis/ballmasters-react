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

export const acceptPendingQuestion = async (id) => {
  try {
    const isAuthenticated = await checkIfAuthenticated();
    if (isAuthenticated) {
      const res = await axios.post(
        "http://localhost:8000/pending-question/accept-pending",
        {
          id: id,
        },
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
    console.error("Failed to fetch all questions data:", error);
    return false;
  }
};

export const deletePendingQuestion = async (id) => {
  try {
    const isAuthenticated = await checkIfAuthenticated();
    if (isAuthenticated) {
      const res = await axios.delete(
        "http://localhost:8000/pending-question/delete-pending",
        {
          withCredentials: true,
          data: {
            id: id,
          },
        }
      );
      return res.data.success;
    }
  } catch (error) {
    console.error("Failed to fetch all questions data:", error);
    return false;
  }
};

export const updatePendingQuestion = async (updatedData) => {
  try {
    const isAuthenticated = await checkIfAuthenticated();
    if (isAuthenticated) {
      const res = await axios.put(
        "http://localhost:8000/pending-question/update-pending",
        updatedData,
        { withCredentials: true }
      );
      return res.data.success;
    }
  } catch (error) {
    console.error("Failed to fetch all questions data:", error);
    return false;
  }
};
