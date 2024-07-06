module.exports = class Hand
{
    static Rock = 'rock';
    static Paper = 'paper';
    static Scissors = 'scissors';
    static options = [this.Rock, this.Paper, this.Scissors];
    static beatsHand = {
        [this.Rock]: this.Scissors,
        [this.Scissors]: this.Paper,
        [this.Paper]: this.Rock
    };

    choice = null;

    constructor(choice) {
        if (!Hand.options.includes(choice)) {
            throw new Exception(`Not a valid choice. Must be one of ${Hand.options.join(', ')}`);
        }
        this.choice = choice;
    }

    isWinningHand(opponentHand) {
        return Hand.beatsHand[this.choice] === opponentHand.choice;
    }

    isSameHand(opponentHand) {
        return this.choice === opponentHand.choice;
    }
}
