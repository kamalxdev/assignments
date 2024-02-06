import { useState } from "react";
import "./App.css";
import Todo from "./components/todo";

function App() {
  let globalId = 1;
  const [todo, setTodo] = useState([]);
  const [data, setData] = useState({ title: "", description: "" });
  let oldTodoState = [];
  console.log("data: ",data);
  console.log("todo: ",todo);
  function addTodoToDom() {}

  function removeTodoFromDom(index) {
    const newTodo = todo.filter((todo, i) => i !== index);
    setTodo(newTodo);
  }

  function updateTodoInDom(oldTodo, newTodo) {}

  function updateState(newTodos) {
    // calculate the diff b/w newTodos and oldTodos.
    // More specifically, find out what todos are -
    // 1. added
    // 2. deleted
    // 3. updated
    const added = [];
    const deleted = [];
    const updated = [];
    // calculate these 3 arrays
    // call addTodo, removeTodo, updateTodo functions on each of the
    // elements
    oldTodoState = newTodos;
  }

  function addTodo() {
    globalId++;
    setTodo([...todo,data]);
    setData({title:"",description:""});
    // updateState(todoState);
  }

  return (
    <>
      <input type="text" id="title" placeholder="Todo title" onChange={(e)=>setData({...data,title:e.target.value})}></input> <br />
      <br />
      <input
        type="text"
        id="description"
        placeholder="Todo description"
        onChange={(e)=>setData({...data,description:e.target.value})}
      ></input>{" "}
      <br />
      <br />
      <button onClick={addTodo}>Add todo</button>
      <br /> <br />
      <div id="todos">

      {todo.map((todo,index)=>{
        return  <Todo title={todo.title} description={todo.description} id={index} key={index} delete={()=>removeTodoFromDom(index)}/>
      })}
      </div>
    </>
  );
}

export default App;
