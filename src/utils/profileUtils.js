import { getProfile } from "../services/userService";
import { User } from "../../models/User";

export const createProfile = async (setProfile) => {
  try {
    const data = await getProfile();
    const user = new User(
      data.id,
      data.username,
      data.email,
      data.score,
      data.gamesPlayed,
      data.gamesWon,
      data.createdAt
    );
    setProfile(user);
  } catch (error) {
    console.error("Error fetching user profile:", error);
  }
};
