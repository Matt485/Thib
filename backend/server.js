import { Server, Origins } from 'boardgame.io/server';
import { TicTacToe } from './src/Game.mjs';
import { dbcon } from './src/db.mjs';

const db = dbcon();

const server = Server({
  // Provide the definitions for your game(s).
  games: [TicTacToe],

  origins: ['http://example.com', '51.38.32.47', Origins.LOCALHOST],
});

const lobbyConfig = {
  apiPort: 8081,
  apiCallback: () => console.log('Running Lobby API on port 8081...'),
};

console.log(server);

server.router.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    await next();
});
//
//
// server.router.get('/customend', (ctx, next) => {
//   ctx.body = 'Hello World!';
// });

// Add middleware to the create game route.
// server.router.use('/games/:name/create', async (ctx, next) => {
//   // const { numPlayers, setupData } = await fetchDataFromSomeCustomAPI();
//   ctx.body = 'Hello Middleware!';
//   next();
// });
//
server.run({ port: 8080, lobbyConfig }, () => console.log("server running... on 8080"));
