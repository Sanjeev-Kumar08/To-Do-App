import React, { useState } from "react";
import { useToDo } from "../Context/ToDoContext";

function TodoForm() {
    
    // Todo Enterd by User
    const [todo, setTodo] = useState('');

    // Get the Context of To-Do
    const {addToDo} = useToDo();

    // Create a add function whhich will invoke at the type of form submission 
    const add = (e) =>{
        e.preventDefault();
            
        // Send the Todo Enter by the user to addToDo (Pass the object in addTodo beacues a new todo is actually a object in the ToDos array)   
        if(todo != ""){
            addToDo({
                todo: todo, 
                id: Date.now(),
                Todostatus: false
            });
        }
        else{
            alert('Please Enter a Valid To-Do')
        }
        setTodo("")
    }

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white py-1.5 text-black"
                value={todo}
                onChange={(e)=>setTodo(e.target.value)
                } 
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-400 text-white shrink-0 hover:bg-black">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

