import { useState } from "react";


const AddTodo = ({handleAddTodo}) => {


    const [noteText, setNoteText] = useState('');
    const charLimit = 30;

    const handleChange = (event)=>{
        if(charLimit - event.target.value.length >=0){
            setNoteText(event.target.value)
        }
    }

    const handleSaveClick = (event) => {
      event.preventDefault();
      if(noteText.trim().length>0){
        handleAddTodo(noteText);
        setNoteText('');
      }
    }


    return ( 
      <form onSubmit={handleSaveClick}>
          <div className="new-note">
            <div className="note-input">
              <input 
                  type="text"
                  required
                  value={noteText}
                  onChange={handleChange}
                  placeholder="Type to add note"
                  />
            </div>
            <div className="note-footer">
              <small>{charLimit - noteText.length} Remaining</small>
              <div> <button type="submit" >Add</button> </div>
            </div>
          </div>
        </form>

     )
}
 
export default AddTodo;