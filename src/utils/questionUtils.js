import { fetchQuestionData } from "../services/questionService";
import { Question } from "../../models/Question";

export const createQuestion = async (setQuestion, category, level) => {
  try {
    const data = await fetchQuestionData(category, level);
    const question = new Question(
      data.id,
      data.question,
      data.category,
      data.level,
      data.answer1,
      data.answer2,
      data.answer3,
      data.answer4,
      data.correctId
    );
    setQuestion(question);
  } catch (error) {
    console.error("Error creating question:", error);
  }
};