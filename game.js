const Hand = require('./hand.js');

module.exports = class Game
{
    playerHand = null;
    computerHand = null;

    constructor(choice) {
        this.playerHand = choice;
        if (this.playerHand === 'random') {
            this.playerHand = this.generateRandomChoice();
        }
        this.computerHand = this.generateRandomChoice();
    }

    generateRandomChoice() {
        return new Hand(Hand.options[Math.floor(Math.random() * Hand.options.length)]);
    }

    winner() {
        if (this.playerHand.isSameHand(this.computerHand)) {
            console.log(`Both players chose ${this.playerHand.choice}.`);
            console.info(`It's a tie, nobody wins.`);

            return 'nobody';
        }

        if (this.playerHand.isWinningHand(this.computerHand)) {
            console.log(`You chose ${this.playerHand.choice}. Computer chose ${this.computerHand.choice}`);
            console.info(`${this.playerHand.choice} beats ${this.computerHand.choice} so you win.`);

            return 'player';
        } else {
            console.log(`You chose ${this.playerHand.choice}. Computer chose ${this.computerHand.choice}`);
            console.error(`${this.computerHand.choice} beats ${this.playerHand.choice} so you lose.`);

            return 'computer';
        }
    }
}
