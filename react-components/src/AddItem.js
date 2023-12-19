import React, { useEffect, useState } from "react";
import './AddItem.css'

export default function Index(){
    const toDoItem =
    {text:"Wash clothes", completed:false, important:true}
    return (<ToDoItem {...toDoItem}/>);
}

function ToDoItem({text, completed, important}){
    const[textState, setTextState] = useState(text);
    const [completedState, setCompletedState] = useState(completed);
    useEffect (() =>{
        setTextState(`${text} ${new Date().toLocaleTimeString()}`);
    })
    return(
        <div className={completedState? "completed" : ""}
        onClick={()=>{
            setCompletedState(!completedState);
        }}>
           {important?"*": ""} {textState}
        </div>
    );
}
