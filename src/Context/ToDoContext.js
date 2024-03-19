import React from "react";
// Create a New Conetxt
export const ToDoContext = React.createContext({
    // ToDos is an array which will contain the each ToDo. Each ToDo will have some properties so that we are defining ToDo using a Object 
    ToDos: [
        //todo 1 (Defalt To-Do)
        {
            todo: 'New ToDo',
            id: 1,
            Todostatus: false
        }
    ],
    addToDo: (todo) =>{},
    deleteToDo: (id)=>{},
    toggleStatus: (id)=>{},
    updateTodo: (todo, id)=>{}
});

// Create a Context Provider
export const ToDoProvider = ToDoContext.Provider;

// Create a Cutsom hook to directly use ToDoContext 
export function useToDo(){
    return React.useContext(ToDoContext)
}