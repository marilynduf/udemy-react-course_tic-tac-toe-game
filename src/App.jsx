import Player from "./Components/Player";
import GameBoard from "./Components/GameBoard";
import Log from "./Components/Log";

import { useState } from "react";
function App() {
    console.log("APP componement rendered");
    const [activePlayer, setActivePlayer] = useState("X");
    const [gameTurns, setGameTurns] = useState([]);

    /** @function handleSelectSquare
     * @description Switch active player
     * @returns {string} 'X' or 'O'
     */
    function handleSelectSquare(rowIndex, colIndex) {
        setActivePlayer((currActivePlayer) =>
            currActivePlayer === "X" ? "O" : "X"
        );
        setGameTurns((prevTurns) => {
            console.log("prevTurns: " + prevTurns);
            let currentPlayer = "X";
            if (prevTurns.length > 0 && prevTurns[0].player === "X") {
                currentPlayer = "O";
            }
            const updateTurns = [
                {
                    square: { row: rowIndex, col: colIndex },
                    player: currentPlayer,
                },
                ...prevTurns,
            ];
            return updateTurns;
        });
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
                    turns={gameTurns}
                />
                <Log>LOG</Log>
            </div>
        </main>
    );
}

export default App;
