import { Server, Origins } from 'boardgame.io/server';
import { TicTacToe } from './src/Game.mjs';

const server = Server({
  // Provide the definitions for your game(s).
  games: [TicTacToe],

  Origins: ['http://example.com', Origins.LOCALHOST_IN_DEVELOPMENT],
});

const lobbyConfig = {
  apiPort: 8081,
  apiCallback: () => console.log('Running Lobby API on port 8081...'),
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

server.run({ port: 8080, lobbyConfig }, () => console.log("server running on 8080..."));
