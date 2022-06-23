import { useState } from "react";

import { MdDelete } from "react-icons/md";

import { useStore } from "./todoStore";

function App() {
  const [todoText, setTodoText] = useState("");
  const { addTodo, removeTodo, toggleCompletedState, todos } = useStore();

  return (
    <div>
      <h3>To-Do's</h3>
      <input
        placeholder="Todo Description"
        required
        onChange={(e) => setTodoText(e.target.value)}
        value={todoText}
      />
      <button
        color="primary"
        onClick={() => {
          if (todoText.length) {
            addTodo(todoText);
            setTodoText("");
          }
        }}
      >
        Add Item
      </button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleCompletedState(todo.id)}
              />
            </span>
            <p
              className={todo.completed ? "completedTodoStyles" : ""}
              key={todo.id}
            >
              {todo.description}
            </p>
            <span>
              <div
                onClick={() => {
                  removeTodo(todo.id);
                }}
              >
                <MdDelete />
              </div>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
