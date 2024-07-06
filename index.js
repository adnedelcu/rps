const Game = require('./game.js');

const game = new Game(process.argv[2]);

const winner = game.winner();
console.log('Winner:', winner);
