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
            return "Novice"
        } else if (this.score < 1000) {
            return "Apprentice"
        } else if (this.score < 1500) {
            return "Adept"
        } else if (this.score < 2000) {
            return "Master"
        } else if (this.score < 2500) {
            return "Virtuoso"
        } else if (this.score < 3000) {
            return "Grandmaster"
        } else {
            return "Legend"
        }
    }

    getJoinedDate() {
        return this.createdAt;
    }

    // get id() {
    //     return this.id;
    // }

    // get username() {
    //     return this.username;
    // }

    // get email() {
    //     return this.email;
    // }

    // get score() {
    //     return this.score;
    // }

    // get gamesPlayed() {
    //     return this.gamesPlayed;
    // }

    // get gamesWon() {
    //     return this.gamesWon;
    // }

    // get createdAt() {
    //     return this.createdAt;
    // }

    // set id(id) {
    //     this.id = id;
    // }

    // set username(username) {
    //     this.username = username;
    // }

    // set email(email) {
    //     this.email = email;
    // }

    // set score(score) {
    //     this.score = score;
    // }

    // set gamesPlayed(gamesPlayed) {
    //     this.gamesPlayed =gamesPlayed;
    // }

    // set gamesWon(gamesWon) {
    //     this.gamesWon = gamesWon;
    // }

    // set createdAt(createdAt) {
    //     this.createdAt = createdAt;
    // }
}