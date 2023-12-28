import { fetchUserData } from "../services/userService";
import { User } from "../models/User";

export const createUser = async (setUser) => {
  try {
    const data = await fetchUserData();
    const user = new User(
      data.profile.id,
      data.profile.username,
      data.profile.role,
      data.profile.email,
      data.profile.score,
      data.friends,
      data.profile.gamesPlayed,
      data.profile.gamesWon,
      data.profile.createdAt
    );
    setUser(user);
  } catch (error) {
    console.error("Error creating user:", error);
  }
};
