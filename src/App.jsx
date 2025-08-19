import Player from "./Components/Player";
import GameBoard from "./Components/GameBoard";
import { useState } from "react";
function App() {
    console.log("APP componement rendered");
    const [activePlayer, setActivePlayer] = useState("X");

    function handSelectSquare() {
        setActivePlayer((currActivePlayer) =>
            currActivePlayer === "X" ? "O" : "X"
        );
    }

    return (
        <main>
            <div id="game-container">
                <ol id="players">
                    <Player initialName="Player 1" symbol="X" style=""></Player>
                    <Player initialName="Player 2" symbol="O"></Player>
                </ol>
                <GameBoard
                    onSelectSquare={handSelectSquare}
                    active={activePlayer}
                />
            </div>
        </main>
    );
}

export default App;
