import React from 'react';

function TicTacToe() {
    const renderSquare = () => {
        return (
            <button className='p-4 w-[80px] h-[80px] text-2xl bg-zinc-100 border border-black'>X</button> // Removed border class
        );
    };

    return (
        <>
            <div className='flex justify-center h-screen items-center bg-black'>
                <div className='border border-black inline-block '> {/* Border on the container */}
                    <div className='flex'>
                        {renderSquare()}
                        {renderSquare()}
                        {renderSquare()}
                    </div>
                    <div className='flex'>
                        {renderSquare()}
                        {renderSquare()}
                        {renderSquare()}
                    </div>
                    <div className='flex'>
                        {renderSquare()}
                        {renderSquare()}
                        {renderSquare()}
                    </div>
                </div>
            </div>
        </>
    );
}

export default TicTacToe;
