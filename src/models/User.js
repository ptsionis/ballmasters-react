export class User {
  constructor(id, username, email, score, gamesPlayed, gamesWon, createdAt) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.score = score;
    this.gamesPlayed = gamesPlayed;
    this.gamesWon = gamesWon;
    this.createdAt = createdAt;
  }

  getRank() {
    if (this.score < 500) {
      return "Novice";
    } else if (this.score < 1000) {
      return "Apprentice";
    } else if (this.score < 1500) {
      return "Adept";
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
