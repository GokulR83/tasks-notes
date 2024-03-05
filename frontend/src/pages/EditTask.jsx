import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import axios from "axios";
import BackButton from "../components/BackButton";
import { useNavigate, useParams } from "react-router-dom";
import "./CreateTask.css";


const EditTask = () => {
  const [ tasks, setTasks ] = useState({ task:"", priority:"high", progress:"" });
  const [ loading, setLoading ] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const url = import.meta.env.VITE_MAIN_URL;

  useEffect(()=>{
    axios.get(`${url}/task/${id}`)
    .then((res)=>{
      console.log(res.data);
      setTasks(res.data);
    })
    .catch((error)=>{
      console.log(error);
    })
  },[])
  const handleSubmit = () =>{
    if(tasks.task ===""){
      alert("Enter the All Required Field");
    }
    else{
      setLoading(true);
      axios.put(`${url}/task/${id}`,tasks)
      .then(()=>{
        setLoading(false);
        navigate("/");
      })
      .catch((error)=>{
        setLoading(false);
        console.log(error);
        alert("An error happened");
      })
      setTasks({ task:"", priority:"high", progress:"" });
    } 
  }
  const handleChange = (event) =>{
    setTasks((oldData)=>{
      const data = {...oldData, [ event.target.name ] : event.target.value }; 
      console.log(data);
      return data;
    })
  }


  return (
    <div>
      <BackButton/>
        {
        loading ? <Spinner/> : (
          <div className="create-task">
      <h1 className="task-heading">Update Task</h1>
      <div className="create-container">
        <div className="task">
        <label htmlFor="task">Enter Your Task:</label>
        <input type="text" name="task" placeholder="Enter your task"  value={tasks.task} onChange={handleChange} />
        </div>
        <div className="priority">
        <label htmlFor="priority">Priority:</label>
        <select onChange={handleChange} name="priority" value={tasks.priority} >
          <option value="high">High</option>
          <option value="medium">medium</option>
          <option value="low">low</option>
        </select>
        </div>
        <div className="progress">
        <label htmlFor="progress">Progress:</label>
        <select  onChange={handleChange} name="progress" value={tasks.progress} >
          <option value="incompleted">In-Completed</option>
          <option value="inprogress">In-Progress</option>
          <option value="completed">Completed</option>
        </select>
        </div>
        <div className="create-btn">
        <button onClick={handleSubmit} className="add-btn">Update</button>
        </div>
        </div>
      </div>
          )
        }
    </div>
  )
}

export default EditTask;