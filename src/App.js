import TodoLists from "./components/TodoList";
import Header from "./components/header";
import Search from "./components/search";
import {nanoid} from 'nanoid';
import { useEffect, useState } from "react";
import React from "react";



function App() {


  const [notes,setNotes] = useState([
    {
      id: nanoid(),
      text:"This is my first todo"
    },
    {
      id: nanoid(),
      text:"This is my second todo"
    },
    {
      id: nanoid(),
      text:"This is my third todo"
    },
  ])




  const [searchNote,setSearchNote] = useState('');


  // To store the data in local storage 
    useEffect(()=>{
      const savedNotes = JSON.parse(localStorage.getItem('take-notes-app-data'))
      if(savedNotes){
        setNotes(savedNotes)
      }
    },[])


    // to store the app data in local storage 
    useEffect(()=>{
      localStorage.setItem('take-notes-app-data',JSON.stringify(notes))
    },[notes])



    // function for adding a new note 
     const addTodo = (text) =>{

      const newTodo = {
        id:nanoid(),
        text : text
      }
      const newNotes = [...notes,newTodo]
      setNotes(newNotes)
      newNotes.reverse();
     }

     const deletingAllTodos = () =>{
      setNotes([]);
     }


     const deletingTodo = (id) =>{
      const newNotes = notes.filter(note => note.id !==id);
      setNotes(newNotes);
     

     }



  return (
    <div className="App">
        <div className="headerapp">
          <Header handleDeleteNotes={deletingAllTodos}/> 
        </div>
        <div className="searchapp">
          <Search handleSearch={setSearchNote}/>
        </div>
        <div className="todoapp">
          <TodoLists notes={notes.filter((note)=>note.text.toLowerCase().includes(searchNote))} handleAddTodo={addTodo} handleDelete={deletingTodo}/>
        </div>
    </div>
  );
}

export default App;
