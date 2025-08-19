import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard({ active, onSelectSquare }) {
    console.log(active);
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleSelectSquare(rowIndex, colIndex) {
        if (!gameBoard[rowIndex][colIndex]) {
            setGameBoard((prevGameBoard) => {
                const updatedGameBoard = [
                    ...prevGameBoard.map((innerArray) => [...innerArray]), // copie profonde du tableau 2D
                ];
                updatedGameBoard[rowIndex][colIndex] = active;
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
