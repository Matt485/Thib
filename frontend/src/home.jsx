import { Link} from "react-router-dom";

import { Client } from 'boardgame.io/client'; //
import { SocketIO } from 'boardgame.io/multiplayer' //
import { TicTacToe } from './ttt/Game.js' // 
import { TicTacToeBoard } from './ttt/Board.jsx' // 

const App2 = Client({
  // A game object.
  game: TicTacToe,
  numPlayers: 2,
  // matchID: '',

  // Your React component representing the game board.
  // The props that this component receives are listed below.
  // When using TypeScript, type the component's properties as
  // extending BoardProps.
  board: TicTacToeBoard,

  // Optional: React component to display while the client
  // is in the "loading" state prior to the initial sync
  // with the game master. Relevant only in multiplayer mode.
  // If this is not provided, the client displays "connecting...".
  // loading: LoadingComponent,

  multiplayer: SocketIO({ server: 'http://51.38.32.47:8080' }),
  debug: false,
});

App2.start();

console.log(App2);

const home = () => {
  return (
    <>
      <div id="glassbox" className="w-[30%] h-[80%] flex flex-col items-center justify-center">
        <div id="logofull" className="w-full h-[60%] mt-[5%] flex flex-col items-center justify-start font-audiowide">
          <div id="logomed" className="bg-logomed bg-contain bg-no-repeat bg-center w-full h-[70%]"></div>
          {/* <img id="logomed" className="h-[70%]" src={("../img/logomed.png")} alt="funny medusa logo"/> */}
          <div id="ashun" className="w-full h-[30%] flex flex-col items-center justify-center">
            <h1 id="logothib" className="">
              THIB
            </h1>
          </div>
        </div>
        <div className="w-[60%] h-[30%] mb-[5%] flex flex-col items-center justify-end gap-[5%]">
          <div id="inputcontainer" className="w-full h-[35%] flex flex-col items-center justify-end">
            <input type="text" id="myinput" placeholder="Your Nickname" className="w-full h-[65%] text-center"/>
          </div>
          <div id="container" className="w-full h-[60%] flex flex-col items-center justify-end">
            <div id="btn" className="w-full h-[85%]">
              <Link to="/lobby" className="w-full h-full">CREATE A LOBBY</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default home;
