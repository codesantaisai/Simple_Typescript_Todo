import React, { useState } from "react";

// import React from "react";
interface item {
    id:number;
    text:string;
    completed:boolean;
}

const Todo: React.FC = () => {
    const [todos, setTodos] = useState<item[]>([
        {id:1, text:"Learn Typescript",completed:false},
        {id:2, text:"Learn React",completed:false}
    ])

    const [input,setInput] = useState<string>("");



    const handleClick = (id:number)=>{
        setTodos(
            todos.map((todo)=>{
                if(todo.id===id){
                    return {...todo, completed:!todo.completed};
                }
                return todo;
            })
        );

    };


    const handleAdd = ()=>{
        const newTodo :item = {id:Date.now(), text:input, completed:false}

        setTodos([...todos, newTodo])
        setInput("")
    }


  return (
    <div className="main-container">
      <h1>Todo</h1>
      <ul>
        {todos.map((todo)=>(
            <li key={todo.id} onClick={()=>handleClick(todo.id)} style={{textDecoration: todo.completed ?"line-through" : "none"}}>{todo.text}
            </li>

           
        ))}
      </ul>  
      <input type="text" 
      value={input}
      placeholder="add task" 
      onChange={(e)=>setInput(e.target.value)}/>
      <button onClick={()=>handleAdd()}>Add</button>
    </div>
  );
};

export default Todo;
