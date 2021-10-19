import { useState } from "react";

const TodoList = ({ todos , completeTodo }) => {
    const [completeHistory, setCompleteHistory] = useState([]);
    
    return (
        <>
        <ul id="todo-list">
        {
            todos?.length > 0 ? 
            (todos?.map(todo => (
                <li key={Math.random() * 1}>
                    <h5>{todo.title}</h5>
                    <p>{todo.note}</p>
                    <button className="complete" onClick={e => {completeTodo(todo) 
                        setCompleteHistory(prev => [...prev, todo])}}>Complete</button>
                </li>
            ))) : 
                <span>No more todos!</span>
            }
        </ul>
        <ul id="complete-history">
            {completeHistory.map(h => 
                <li key={Math.random() * 1}>
                    <span>Todo: {h.title} was completed!</span>
                </li>
            )}
        </ul>
        </>
    )
}

export default TodoList 
