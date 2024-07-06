const options = ['rock', 'paper', 'scissors'];
const beatsHand = {'rock': 'scissors', 'scissors': 'paper', 'paper': 'rock'};

let playerChoice = process.argv[2];
if (!options.includes(playerChoice) && playerChoice !== 'random') {
    console.error(`Not a valid choice. Must be one of ${options.join(', ')}`);
    return;
}

if (playerChoice === 'random') {
    playerChoice = options[Math.floor(Math.random() * options.length)];
}

const computerChoice = options[Math.floor(Math.random() * options.length)];

console.log(playerChoice);
console.log(computerChoice);

switch (true) {
    case playerChoice === computerChoice:
        console.log(`Both players chose ${playerChoice}.`);
        console.info(`It's a tie, nobody wins.`);

        break;

    case beatsHand[playerChoice] === computerChoice:
        console.log(`You chose ${playerChoice}. Computer chose ${computerChoice}`);
        console.info(`${playerChoice} beats ${computerChoice} so you win.`);

        break;

    case beatsHand[computerChoice] === playerChoice:
        console.log(`You chose ${playerChoice}. Computer chose ${computerChoice}`);
        console.error(`${computerChoice} beats ${playerChoice} so you lose.`);

        break;
}

return;
