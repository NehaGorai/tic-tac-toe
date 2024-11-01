import React, { useState } from 'react';

function TicTacToe() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isX, setIsX] = useState(true);
    const [winner, setWinner] = useState(null);


    const checkWinner = (newBoard) => {
        const winningCombination = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let i = 0; i < winningCombination.length; i++) {
            const [a, b, c] = winningCombination[i];
            if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[b] === newBoard[c]) {
                return winningCombination[i];
            }
        }
        return null;
    };

    const renderSquare = (index) => {
        const handleClick = (index) => {

            if (board[index] !== null || winner) return;

            console.log(`Clicked square ${index}`);
            const newBoard = [...board];
            newBoard[index] = isX ? "X" : "O";
            setBoard(newBoard);
            setIsX(!isX);


            const winnerCombination = checkWinner(newBoard);
            if (winnerCombination) {
                setWinner(newBoard[winnerCombination[0]]);
            }
        };

        return (
            <button
                onClick={() => handleClick(index)}
                className="p-4 w-[80px] h-[80px] text-2xl bg-zinc-100 border border-black">
                {board[index]}
            </button>
        );
    };

    return (
        <>
            <div className="flex mt-8 justify-center items-center">
                <div className="border border-black inline-block">
                    <div className="flex">
                        {renderSquare(0)}
                        {renderSquare(1)}
                        {renderSquare(2)}
                    </div>
                    <div className="flex">
                        {renderSquare(3)}
                        {renderSquare(4)}
                        {renderSquare(5)}
                    </div>
                    <div className="flex">
                        {renderSquare(6)}
                        {renderSquare(7)}
                        {renderSquare(8)}
                    </div>
                </div>
            </div>
            <div>
                <button
                    onClick={() => {
                        setBoard(Array(9).fill(null));
                        setWinner(null);
                        setIsX(true);
                    }}
                    className="block mt-5 text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-auto">
                    Reset
                </button>
            </div>
            {winner && <h1 className="text-2xl mt-4 text-center text-black">{winner} is the winner!</h1>}
        </>
    );
}

export default TicTacToe;
