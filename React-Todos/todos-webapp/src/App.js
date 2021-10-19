import { useState } from "react"
import TodoList from "./components/TodoList";


const App = () => {
  
  const [todo, setTodo] = useState({title:"", note:""});
  const [todos, setTodos] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();
    setTodos((prev) => ([...prev, todo]))
  }

  const handleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setTodo((prev) => ({...prev, [name]: value}));
  }

  const completeTodo = (todo) => {
    setTodos((prev) => (prev.filter(item => item !== todo)))
  }

  
  return (
  <>
    <nav>
      <h1>HIOF</h1>
      <span>User {"user"}</span>
    </nav>
    <main>
      <form>
        <h5>Title</h5>
        <input id="title" name="title" type="text" onChange={handleInputChange} />
        <h5>Content</h5>
        <textarea id="note" name="note" type="text" onChange={handleInputChange} />
        <button type="submit" onClick={addTodo}>Add</button>
      </form>
      <h3>My Todos</h3>
      <TodoList todos={todos} completeTodo={completeTodo} />
    </main>
  </>)
}

export default App
