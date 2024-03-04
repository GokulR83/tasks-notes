import { useState } from "react";
import Spinner from "../components/Spinner";
import axios from "axios";
import BackButton from "../components/BackButton";
import { useNavigate } from "react-router-dom";
import "./CreateTask.css";


const CreateTask = () => {
  const [ tasks, setTasks ] = useState({ task:"", priority:"high", progress:"incompleted" });
  const [ loading, setLoading ] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = () =>{
    if(tasks.task ===""){
      alert("Enter the All Required Field");
    }
    else{
      setLoading(true);
      axios.post("http://localhost:8000/task/",tasks)
      .then(()=>{
        setLoading(false);
        navigate("/");
      })
      .catch((error)=>{
        console.log(error);
      })
      setTasks({ task:"", priority:"high", progress:"incompleted" });
    } 
  }
  const handleChange = (event) =>{
    setTasks((oldData)=>{
      return {...oldData, [ event.target.name ] : event.target.value }; 
    })
  }


  return (
    <div>
      <BackButton/>
        {
        loading ? <Spinner/> : (
          <div className="create-task">
      <h1 className="task-heading">Create Task</h1>
      <div className="create-container">
        <div className="task">
        <label htmlFor="task">Enter Your Task:</label>
        <input type="text" name="task" placeholder="Enter your task"  value={tasks.task} onChange={handleChange} />
        </div>
        <div className="priority">
        <label htmlFor="priority">Priority:</label>
        <select onChange={handleChange} name="priority" >
          <option value="high">High</option>
          <option value="medium">medium</option>
          <option value="low">low</option>
        </select>
        </div>
        <div className="progress">
        <label htmlFor="progress">Progress:</label>
        <select  onChange={handleChange} name="progress" >
          <option value="incompleted">In-Completed</option>
          <option value="inprogress">In-Progress</option>
          <option value="completed">Completed</option>
        </select>
        </div>
        <div className="create-btn">
        <button onClick={handleSubmit} className="add-btn">Add</button>
        </div>
        </div>
      </div>
          )
        }
    </div>
  )
}

export default CreateTask