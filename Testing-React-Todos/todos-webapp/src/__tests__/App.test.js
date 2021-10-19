import { render, screen, fireEvent } from "@testing-library/react"
import App from "../App" 

it('todolist length should increment when "Add" button is clicked', () => {
    render(<App />)
    
    fireEvent.change(document.getElementById("title"), {target: { value: "En todo tittel"}});
    fireEvent.change(document.getElementById("note"), {target: { value: "En todo note"}});

    expect(document.getElementById("todo-list").getElementsByTagName("li").length).toBe(0);
    fireEvent.click(screen.getByText("Add"));
    expect(document.getElementById("todo-list").getElementsByTagName("li").length).toBe(1);
})


