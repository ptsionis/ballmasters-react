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
      data.profile.profilePicUrl,
      data.profile.score,
      data.friends,
      data.profile.gamesPlayed,
      data.profile.gamesWon,
      data.profile.historyPlayed,
      data.profile.historyWon,
      data.profile.geographyPlayed,
      data.profile.geographyWon,
      data.profile.financePlayed,
      data.profile.financeWon,
      data.profile.logoPlayed,
      data.profile.logoWon,
      data.profile.triviaPlayed,
      data.profile.triviaWon,
      data.profile.hiddenPlayed,
      data.profile.hiddenWon,
      data.profile.createdAt
    );
    setUser(user);
  } catch (error) {
    console.error("Error creating user:", error);
  }
};

export const getFirstName = (name) => {
  const firstName = name.split(" ");
  return firstName[0];
};
