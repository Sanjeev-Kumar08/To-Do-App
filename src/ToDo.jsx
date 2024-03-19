import React, { useEffect, useState } from 'react'
import {ToDoProvider} from './Context/indexToDo'
import TodoForm from './Components/TodoForm';
import TodoItem from './Components/TodoItem';

function ToDo() {

  const [ToDos, setTodos] = useState([]);

  const addToDo = (todo) =>{
      setTodos((prevTodos)=>{
        return [{...todo}, ...prevTodos]
      })
  }  

  const deleteToDo = (id) =>{
    setTodos((prevTodos)=>{
    return prevTodos.filter((todo)=>{
      return todo.id !== id
    })
    })
  }  

  const updateTodo = (id , todo) =>{
    setTodos((prevTodos) => {
      return prevTodos.map((prevtodo)=>{
        return (prevtodo.id === id ? todo : prevtodo);
      })
    });
  }  

  const toggleStatus = (id) => {
    setTodos((prevtodos)=>{
      return prevtodos.map((prevtodo)=>{
        return (prevtodo.id === id ? {...prevtodo, Todostatus: !prevtodo.Todostatus} : prevtodo) 
      })
    })
  }  

  // Set ToDo to the Local Storage
  // 1: Disply the Saved To-Do
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("Todos"));
    if (storedTodos && storedTodos.length > 0) {
      setTodos(storedTodos);
    }
  }, []);

  //2: Store the New To-Dos array each time any ToDos array get interfered. 
  useEffect(() => {
    localStorage.setItem("Todos" , JSON.stringify(ToDos))
  },[ToDos])


  return (
    <ToDoProvider value={{ToDos, addToDo, deleteToDo, updateTodo, toggleStatus}}>
      <div className="bg-[#202936] min-h-screen py-8">
        <div className="bg-gray-400 w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-3xl font-bold text-center mb-8 mt-4 font-arial text-[#3d2415]">Your To-Do's</h1>
            <div className="mb-4">
              {/* To-Do Form */}
                <TodoForm/>
            </div>
            <div className="flex flex-wrap gap-y-3">
              {/* Loop and Add Single ToDo */}
              {ToDos.map((todo) => (
                <div key={todo.id} className='w-full'>
                  <TodoItem todo={todo}/>
                </div>
            ))}
            </div>
        </div>
      </div>
    </ToDoProvider>
  )
}

export default ToDo;