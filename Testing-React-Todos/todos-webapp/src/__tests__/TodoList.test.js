import { render, screen, fireEvent } from "@testing-library/react"
import TodoList from "../components/TodoList"
 

it("should display the placeholder text on empty list", () => {
    render(<TodoList />)

    const placeholder = screen.getByText(/No more todos!/i);
    expect(placeholder).toBeInTheDocument();
})

it("should display one item in list with one todo", () => {
    const t = "some title";
    render(<TodoList todos={[{title:t, note:"some note"}]} />)

    const todoItem = screen.getByText(t);
    expect(todoItem).toBeInTheDocument();
})

it("should display title in history list when complete is clicked", () => {
    const t = "some title";
    render(<TodoList todos={[{title:t, note:"some note"}]} completeTodo={()=> 0} />)

    fireEvent.click(screen.getByText("Complete"));
    expect(document.getElementById("complete-history")).toHaveTextContent("Todo: some title was completed!")
})
