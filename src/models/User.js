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
    historyPlayed,
    historyWon,
    geographyPlayed,
    geographyWon,
    financePlayed,
    financeWon,
    logoPlayed,
    logoWon,
    triviaPlayed,
    triviaWon,
    hiddenPlayed,
    hiddenWon,
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
    this.historyPlayed = historyPlayed;
    this.historyWon = historyWon;
    this.geographyPlayed = geographyPlayed;
    this.geographyWon = geographyWon;
    this.financePlayed = financePlayed;
    this.financeWon = financeWon;
    this.logoPlayed = logoPlayed;
    this.logoWon = logoWon;
    this.triviaPlayed = triviaPlayed;
    this.triviaWon = triviaWon;
    this.hiddenPlayed = hiddenPlayed;
    this.hiddenWon = hiddenWon;
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

  getGoalScore() {
    if (this.score < 500) {
      return 500;
    } else if (this.score < 1000) {
      return 1000;
    } else if (this.score < 1500) {
      return 1500;
    } else if (this.score < 2000) {
      return 2000;
    } else if (this.score < 2500) {
      return 2500;
    } else if (this.score < 3000) {
      return 3000;
    } else {
      return 0;
    }
  }

  getJoinedDate() {
    return this.createdAt.split("T")[0];
  }

  getWinrate() {
    if (this.gamesPlayed === 0) {
      return "-";
    }
    return Math.round((this.gamesWon / this.gamesPlayed) * 100) + "%";
  }
}
