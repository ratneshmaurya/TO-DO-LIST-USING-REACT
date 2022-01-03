import React from "react";
import Tooltip from '@material-ui/core/Tooltip'; //impoting tooltip from materialised ui 
//used to show delete on hovering on delete button
import { useState } from "react";

const Todo_items=(props)=>{
    let[cut,setcut]=useState(false);

    //now agr note phle se cut hai toh cut button press krne prr uncut ho jae , vice-versa;
    const cut_it=()=>{
        if(cut){
            setcut(false);
        }
        else if(!cut){
            setcut(true);
        } 
    }
    
    //in the image we have acessing the function(usinf props) to be called 
    //when we r tapping the cross button image
    return(
        <>
        <div className="todo_list_item">
            <Tooltip title="Delete">
            <img src="https://img.icons8.com/material-outlined/24/000000/delete-forever.png" 
                    onClick={()=>{
                        props.onSelect(props.id)
                        }}/>
            </Tooltip>
            <img src="https://img.icons8.com/material-outlined/24/000000/delete-sign.png" onClick={cut_it}/>
                <li style={{textDecoration: cut ?'line-through':"" }}>{props.Itsvalue}</li>
           
        </div>
        
        
        </>
    )
}
export default Todo_items;