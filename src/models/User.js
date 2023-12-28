export class User {
  constructor(
    id,
    username,
    role,
    email,
    score,
    friends,
    gamesPlayed,
    gamesWon,
    createdAt
  ) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.role = role;
    this.score = score;
    this.friends = friends;
    this.gamesPlayed = gamesPlayed;
    this.gamesWon = gamesWon;
    this.createdAt = createdAt;
  }

  getRank() {
    if (this.score < 500) {
      return "Amateur";
    } else if (this.score < 1000) {
      return "Beginner";
    } else if (this.score < 1500) {
      return "Pro";
    } else if (this.score < 2000) {
      return "Master";
    } else if (this.score < 2500) {
      return "Virtuoso";
    } else if (this.score < 3000) {
      return "Grandmaster";
    } else {
      return "Legend";
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
