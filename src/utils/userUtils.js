import { fetchUserData } from "../services/userService";
import { User } from "../models/User";

export const createUser = async (setUser) => {
  try {
    const data = await fetchUserData();
    const user = new User(
      data.id,
      data.username,
      data.email,
      data.score,
      data.gamesPlayed,
      data.gamesWon,
      data.createdAt
    );
    setUser(user);
  } catch (error) {
    console.error("Error creating user:", error);
  }
};
