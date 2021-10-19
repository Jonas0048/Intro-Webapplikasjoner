const TodoList = ({ todos , completeTodo }) => {
    
    return (
        <ul id="todo-list">
        {
            todos?.length > 0 ? 
            (todos?.map(todo => (
                <li key={todo.title+todo.note.length * Math.random() * 1}>
                    <h5>{todo.title}</h5>
                    <p>{todo.note}</p>
                    <button className="complete" onClick={e => completeTodo(todo)}>Complete</button>
                </li>
            ))) : null}
        </ul>
        
    )
}

export default TodoList
