import React,{ useState }  from 'react';
function App() {
  const[count,setcount]=useState([]);
  const [text,setText]=useState("")
  const addTask=()=>{
    setcount([...tasks, {name:text,completed:false}]);
    setText("");
  }
  const deleteTask=(index)=>{
    setTask(tasks.filter((_,i)=>i!==index));
  }
  return (
    <div>
      <h1>To-Do list</h1>
      <input
      value={text}
      Onchange={ (e)=>setText(e.target.value)}
      placeholder='Enter Task'
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {count.map((task,index)=>(
          <li key={index}>
            <input type="checkbox" checked={task.completed} />
            <span>{task.name}</span>
            <button>delete</button>
          </li>
        ))}
      </ul>
      </div>
  )
}
