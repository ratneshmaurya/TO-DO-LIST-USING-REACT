import React, { useState } from "react";
import Todo_items from "./Todo_items";
import "./index.css";

const App=()=>{
    let[inputlist,setinputlist]=useState();
    let[Items,setItems]=useState([]);//crreating the empty array at intitally;
    const update=(event)=>{
        setinputlist(event.target.value);
    };
    const listOfItems=()=>{
        setItems((olditems)=>{
            return [...olditems,inputlist];
        }) //olditems have value jitna setItem ke pass phle se tha and in function 
        //wo old items me new elelement or add krr rha
        setinputlist(""); //when user click the button then input list me jo likha 
        //hua tha vo empty ho jae screen prr , as we have used the value attribute in 
        //input tag hence the changes will seen to us
    };

    //now this delete item function is called whenever user click
    // on cross,we r writing this function here ,as we have passed this function also as 
    //props to the component,hence is component is accessing this function,no issue
    const deleteItem=(id)=>{
        console.log("click");

        setItems((olditems)=>{
            return olditems.filter((element,index)=>{
                return index!==id;
            });
        });
    };

    return(
        <>
        <div className="main-div">
            <div className="todo-div">
                <div className="head-and-input">
                    <br></br>
                    <div className="todo-heading">
                    <h1>Todo - List</h1>
                    </div>
                    <br/>
                    <div className="todo-inputs">
                        <input type="text" placeholder="add items" value={inputlist} onChange={update} />
                        <button onClick={listOfItems}>+</button>
                    </div>
                    <br/>
                </div>
                
                <ul>
                    {
                        Items.map((value,index)=>{
                            return<Todo_items 
                            key={index} 
                            id={index}
                            onSelect={deleteItem} 
                            Itsvalue={value}/>
                    })}
                </ul>
            </div>
        </div>
        </>
    );
};
//at above if u won't use value attribute then it wont update the input tag 
//value ,i.e it doesn't make input tag empty on adding note to collection
export default App;
