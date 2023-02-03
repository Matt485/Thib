const { Server, Origins } = require('boardgame.io/server');
const { TicTacToe } = require('./src/Game.mjs');

const server = Server({
  // Provide the definitions for your game(s).
  games: [TicTacToe],

  origins: ['172.18.0.2', '172.18.0.3', 'http://172.18.0.2', 'http://172.18.0.3', Origins.LOCALHOST],
});

const lobbyConfig = {
  apiPort: 8081,
  apiCallback: () => console.log('Running Lobby API on port 8080...'),
};


server.router.get('/customend', (ctx, next) => {
  ctx.body = 'Hello World!';
});

// Add middleware to the create game route.
server.router.use('/games/:name/create', async (ctx, next) => {
  // const { numPlayers, setupData } = await fetchDataFromSomeCustomAPI();
  ctx.body = 'Hello Middleware!';
  next();
});

server.run({ port: 8080, lobbyConfig }, () => console.log("server running..."));
