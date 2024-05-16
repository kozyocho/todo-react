import { useState } from "react";
import { InputTodo} from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";
import "./styles.css";

export const Todo = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if(todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  }

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  }

  const onClickBack = (index) => {
    /*
    戻るボタンを押す
    完了のtodoから削除
    完了のtodoを更新
    未完了のtodoに移動
    未完了のtodoを更新
    */
   const newCompleteTodos = [...completeTodos];
   newCompleteTodos.splice(index, 1);

   const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
   setCompleteTodos(newCompleteTodos);
   setIncompleteTodos(newIncompleteTodos);
  }

  return (
    <>
    <InputTodo todoText={todoText} onChange={onChangeTodoText} onClick={onClickAdd} />

    <IncompleteTodos incompleteTodos={incompleteTodos} onClickComplete={onClickComplete} onClickDelete={onClickDelete}/>

    <CompleteTodos completeTodos={completeTodos} onClickBack={onClickBack}/>
    </>
  )
}