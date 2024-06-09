import { useState, useEffect } from 'react';
import { TodoHeader } from './TodoHeader';
import { NewTodos } from './NewTodos';
import { TodoList } from './TodoList';
import uuid from './uuid';
import './App.css';


function App() {
  const [todolist, setTodolist] = useState(()=>{
    const todolist = localStorage.getItem('todoList');
    return todolist == null ? [] : JSON.parse(todolist)
  });
  
  useEffect(()=>{
    localStorage.setItem('todoList',JSON.stringify(todolist))
  },[todolist]);

  function addTodos(title, comment){
    const newList = [
      ...todolist,
      { 
        title,
        id: uuid(),
        completed: false,
        comment
      }
    ];
    setTodolist(newList);
  }

  function handleToggle(id, checked){
    const newList = todolist.map( todo => {
      if(todo.id == id){
        todo.completed = checked;
      }
      return todo;
    })
    setTodolist(newList);
  }

  function handleDelete(id){
    const newList = todolist.filter(todo => todo.id != id);
    setTodolist(newList);
  }
  
  return (
    <>
      <TodoHeader />
      <article>
        <TodoList list={todolist} handleToggle={handleToggle} handleDelete={handleDelete}/>
        <NewTodos onSubmit={addTodos}/>
      </article>
    </>
  )
}

export default App
