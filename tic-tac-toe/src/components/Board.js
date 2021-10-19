const Board = ({board, handleClick, winningSquares}) => {
    return (
        <>
        {board?.length > 0 ? 
            <ul id="board">
              {board.map((item, index) => (<li className="square" key={index}>
                <button 
                    className={`${winningSquares.includes(index) ? 'winning' : ''}`} 
                    type="button" 
                    onClick={(event) => handleClick(event, index)}
                >
                    {item || index}
                </button>
                </li>))}
            </ul> : null
          }
        </>
    )
}

export default Board;