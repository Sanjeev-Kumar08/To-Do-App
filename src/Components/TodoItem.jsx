import React, {useState} from "react";
import { useToDo } from "../Context/ToDoContext";

export default function TodoItem({todo}) {

    // Taking Two States for functionalitis
    const [TodoEditable, setTodoEditable] = useState(false)
    const [todoMsg, setTodoMsg] = useState(todo.todo)

    // Extracting all the neceesary methods from the Context
    const {deleteToDo, updateTodo, toggleStatus} = useToDo();
    
    const editToDo = () => {
        updateTodo(todo.id , {...todo , todo: todoMsg});
        setTodoEditable(false);
    }

    const handleChange = () => {
        toggleStatus(todo.id)
    }

    const handleDelete = () => {
        deleteToDo(todo.id);
    }

    return (
        <div
            className={`flex rounded-lg px-3 py-1.5 gap-x-3 shadow-sm ${todo.Todostatus ? "bg-green-300" : "bg-white"} duration-300 text-black border border-gray-300`}
        >
            {/* Toggle Status */}
            <input
                type="checkbox"
                className="cursor-pointer"
                checked= {todo.Todostatus}
                onChange={handleChange}
                title="Completed"
            />
            {/* Display Todo */}
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg px-2 ${todo.Todostatus ? "line-through" : ""}
                ${TodoEditable ? "border-green-400 border-2" : ""}
                `}
                value={todoMsg}
                onChange={(e)=>{setTodoMsg(e.target.value)}}
                readOnly={!TodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className={`inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50
                `}
                title="Edit / Save"
                onClick={()=>{
                    if(TodoEditable){
                        editToDo();
                    }
                    else{
                        setTodoEditable((prev)=>!prev);
                    }}
                }
            disabled = {todo.Todostatus}
            >
                {TodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
            onClick={handleDelete}
            title="Delete"
            >
                ❌
            </button>
        </div>
    );
}

