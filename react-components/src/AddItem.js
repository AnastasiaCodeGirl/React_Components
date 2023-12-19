import React from "react";
import './AddItem.css'

function ToDoItem({text, completed}){
    return(
        <div className={completed? "completed" : ""}>
            {text}
        </div>
    );
}

export default ToDoItem;