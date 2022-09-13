import ToDo from "./todo";
import AddTodo from "./addTodo";
import React from "react";


const TodoLists = ({notes,handleAddTodo,handleDelete}) => {
    return ( 
        <div className="notes-list">
            <AddTodo handleAddTodo={handleAddTodo}/>
                    {notes.map((note)=> 
                    <ToDo id={note.id} text={note.text} handleDelete={handleDelete} />
                    )}
        </div>
     )
}
 
export default TodoLists;