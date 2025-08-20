import Player from "./Components/Player";
import GameBoard from "./Components/GameBoard";
import { useState } from "react";
function App() {
    console.log("APP componement rendered");
    const [activePlayer, setActivePlayer] = useState("X");

    /** @function handleSelectSquare
     * @description Switch active player
     * @returns {string} 'X' or 'O'
     */
    function handleSelectSquare() {
        setActivePlayer((currActivePlayer) =>
            currActivePlayer === "X" ? "O" : "X"
        );
    }

    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player
                        initialName="Player 1"
                        symbol="X"
                        isActive={activePlayer === "X"}
                    ></Player>
                    <Player
                        initialName="Player 2"
                        symbol="O"
                        isActive={activePlayer === "O"}
                    ></Player>
                </ol>
                <GameBoard
                    onSelectSquare={handleSelectSquare}
                    activePlayerSymbol={activePlayer}
                />
            </div>
        </main>
    );
}

export default App;
