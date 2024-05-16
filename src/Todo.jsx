import { useState } from "react";
import "./styles.css";

export const Todo = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState(["Todoです1", "Todoです2"]);
  const [completeTodos, setCompleteTodos] = useState(["Todoでした1", "Todoでした2"]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if(todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  return (
    <>
    <div className="input-area">
      <input type="text" placeholder="ToDoを入力" value={todoText} onChange={onChangeTodoText}/>
      <button onClick={onClickAdd}>追加</button>
    </div>
    <div className="incomplete-area">
      <p className="title">未完了のToDo</p>
      <ul>
        {incompleteTodos.map((todo) => 
          ( 
            <li key={todo}>
              <div className="list-row">
                <p className="todo-item">{todo}</p>
                <button>完了</button>
                <button>削除</button>
              </div>
            </li>
          )
        )}
      </ul>
    </div>
    <div className="complete-area">
    <p className="title">完了のToDo</p>
      <ul>
        {completeTodos.map((todo) => (
          <li key={todo}>
            <div className="list-row">
              <p className="todo-item">{todo}</p>
              <button>戻す</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}