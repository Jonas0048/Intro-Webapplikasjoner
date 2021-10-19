const BoardHistory = ({history}) => {
    return (
        <>
        {history?.length > 0 ? (
            <ul>
              {/* Bruker array.map() for å gå igjennom listen */}
              {history.map((move, index) => (
                <li key={move + index}>
                  <span>
                    {/* Skriver ut verdien .player fra objektet {value: '', player: ''} */}
                    #{index}: Player: {move.player} clicked square
                  </span>
                  <span>{move.value}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </>
    )
}

export default BoardHistory;