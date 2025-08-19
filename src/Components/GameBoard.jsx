import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard({ activePlayerSymbol, onSelectSquare }) {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleSelectSquare(rowIndex, colIndex) {
        if (!gameBoard[rowIndex][colIndex]) {
            setGameBoard((prevGameBoard) => {
                const updatedGameBoard = [
                    ...prevGameBoard.map((innerArray) => [...innerArray]), // copie profonde du tableau 2D
                ];
                updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
                return updatedGameBoard;
            });

            onSelectSquare();
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
