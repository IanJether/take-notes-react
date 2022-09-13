import React from "react";


const ToDo = ({id,text,handleDelete}) => {
    // the actual function has been defined in app.js that is why it has been passed as props 
    return ( 

        <div className="note">
            <div className="note-text">
                <span>{text}</span>
            </div>
            <div className="note-delete">
                <button onClick={()=>handleDelete(id)}>Delete</button>
            </div>
        </div>
     );
}
 
export default ToDo;