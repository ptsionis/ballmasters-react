export class User {
  constructor(
    id,
    username,
    role,
    email,
    profilePicUrl,
    score,
    friends,
    gamesPlayed,
    gamesWon,
    createdAt
  ) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.profilePicUrl = profilePicUrl;
    this.role = role;
    this.score = score;
    this.friends = friends;
    this.gamesPlayed = gamesPlayed;
    this.gamesWon = gamesWon;
    this.createdAt = createdAt;
  }

  getRank() {
    if (this.score < 500) {
      return "amateur";
    } else if (this.score < 1000) {
      return "beginner";
    } else if (this.score < 1500) {
      return "pro";
    } else if (this.score < 2000) {
      return "master";
    } else if (this.score < 2500) {
      return "virtuoso";
    } else if (this.score < 3000) {
      return "grandmaster";
    } else {
      return "legend";
    }
  }

  getJoinedDate() {
    return this.createdAt.split("T")[0];
  }

  getWinrate() {
    if (this.gamesPlayed === 0) {
      return "-";
    }
    return (this.gamesPlayed / this.gamesWon) * 100 + "%";
  }
}
