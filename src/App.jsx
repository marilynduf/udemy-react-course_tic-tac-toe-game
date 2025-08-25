import Player from "./Components/Player";
import GameBoard from "./Components/GameBoard";
import Log from "./Components/Log";
import { useState } from "react";

function deriveActivePlayer(gameTurns) {
    let currentPlayer = "X";
    if (gameTurns.length > 0 && gameTurns[0].player === "X") {
        currentPlayer = "O";
    }
    return currentPlayer;
}

function App() {
    const [gameTurns, setGameTurns] = useState([]);
    const activePlayer = deriveActivePlayer(gameTurns);

    const initialGameBoard = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ];

    let gameBoard = initialGameBoard;
    for (const turn of gameTurns) {
        const { square, player } = turn;
        const { row, col } = square;
        gameBoard[row][col] = player;
    }

    /** @function handleSelectSquare
     * @description Switch active player
     * @returns {string} 'X' or 'O'
     */
    function handleSelectSquare(rowIndex, colIndex) {
        /** @function setGameTurns
         * @description Enregistre les index du carré cliqué ainsi que le joueur actif (celui qui clique sur le carré), puis change la valeur contenu dans le carré par le symbol du joueur actif
         * @returns {array[objects]} tableau d'objets
         */
        setGameTurns((prevTurns) => {
            const activePlayer = deriveActivePlayer(prevTurns);
            const updateTurns = [
                {
                    square: { row: rowIndex, col: colIndex },
                    player: activePlayer,
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
                    board={gameBoard}
                />
                <Log>LOG</Log>
            </div>
        </main>
    );
}

export default App;
