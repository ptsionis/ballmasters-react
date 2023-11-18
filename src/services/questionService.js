import axios from "axios";
import { checkIfAuthenticated } from "../utils/authUtils";

export const fetchQuestionData = async (category, level) => {
  try {
    const isAuthenticated = await checkIfAuthenticated();
    if (isAuthenticated) {
      const res = await fetch(
        `http://localhost:8000/question?category=${category}&level=${level}`,
        {
          credentials: "include",
        }
      );
      console.log(res.data)
      return res.data;
    }
  } catch (error) {
    console.error("Failed to fetch question data:", error);
    return null;
  }
};

export const fetchAllQuestionData = async (category, level) => {
  try {
    const isAuthenticated = await checkIfAuthenticated();
    if (isAuthenticated) {
      const res = await axios.get(
        "http://localhost:8000/question/all-questions",
        {
          withCredentials: true,
        }
      );
      console.log(res.data)
      return res.data;
    }
  } catch (error) {
    console.error("Failed to fetch all questions data:", error);
    return null;
  }
};

export const updateQuestionData = async (question) => {
  try {
    const isAuthenticated = await checkIfAuthenticated();
    if (isAuthenticated) {
      const res = await axios.put(
        "http://localhost:8000/question/update-question",
        question,
        { withCredentials: true }
      );
      return res.data;
    }
  } catch (error) {
    console.error("Failed to update question data:", error);
    return null;
  }
}

export const deleteQuestionData = async (id) => {
  try {
    const isAuthenticated = await checkIfAuthenticated();
    if (isAuthenticated) {
      const res = await axios.delete(
        "http://localhost:8000/question/delete-question",
        {
          withCredentials: true,
          data: {
            id: id,
          },
        }
      );
      return res.data;
    }
  } catch (error) {
    console.error("Failed to delete question data:", error);
    return null;
  }
}