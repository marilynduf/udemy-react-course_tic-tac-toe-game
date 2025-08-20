import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard({ activePlayerSymbol, onSelectSquare }) {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    /** @function handleSelectSquare
     * @description Update le nouveau gameBoard
     * @returns {string[]} tableau 2D de chaînes contenant des 'X' ou des 'O'
     */
    function handleSelectSquare(rowIndex, colIndex) {
        if (!gameBoard[rowIndex][colIndex]) {
            setGameBoard((prevGameBoard) => {
                const updatedGameBoard = [
                    ...prevGameBoard.map((innerArray) => [...innerArray]), // copie profonde du tableau 2D
                ];
                updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
                return updatedGameBoard;
            });

            onSelectSquare(); // Switch active player (définition dans le composant App)
        }
    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key="rowIndex">
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button
                                    onClick={() =>
                                        handleSelectSquare(rowIndex, colIndex)
                                    }
                                >
                                    {playerSymbol}
                                </button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}
