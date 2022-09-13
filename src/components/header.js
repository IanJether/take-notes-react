import React from "react";


const Header = ({handleDeleteNotes}) => {
    return ( 
        <div className="header">
            <div className="keep-notes">
                <h2>KEEP NOTES</h2>
            </div>
            <div className="reset">
                <button onClick={handleDeleteNotes}>Reset</button>
            </div>
        </div>
     );
}
 
export default Header;