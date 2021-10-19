const GameStatus = ({winner, winningSquares, resetGame, player, history}) => {
    return (
        <>
            {winner ? (
            <section><h3>Congratulations {winner} with the {winningSquares} combination</h3>
            <button type="button" onClick={resetGame}>New game</button>
            </section>
            ) : (history?.length === 9 ? (
                <section><h3>It's a tie!</h3>
                    <button type="button" onClick={resetGame}>New game</button>
                </section>
                ) : (<section>
                    <p>Next turn: {player}</p>
                    </section>))
            }
        </>
    )
}

export default GameStatus;