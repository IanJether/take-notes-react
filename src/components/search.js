import React from "react";



const Search = ({handleSearch}) => {
    // the actual function has been defined in app.js 
    return (
        <div className="search">
            <input
            type="text"
            placeholder="Search notes"
            onChange={(event)=>handleSearch(event.target.value)}
            />
        </div>
      );
}
 
export default Search;