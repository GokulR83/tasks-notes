import { useState, useEffect } from "react";
import { add, completed, deleteIcon, edit, star } from "../assets";
import axios from "axios";
import "./Home.css";
import Spinner from "../components/Spinner";
import TaskCard from "../components/home/TaskCard";
import NoteCard from "../components/home/NoteCard";
import { Link } from "react-router-dom";
const url = import.meta.env.VITE_MAIN_URL;

const Home = () => {
  const [task, setTask ] = useState([]);
  const [ note, setNote ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const [ highlight, setHighlight ] = useState(false);
  const [ progress, setProgress ] = useState("all");

  useEffect(()=>{
    setLoading(true);
    axios.get(`${url}/task`)
    .then((res)=>{
      const data = res.data.data
      setTask(data);
      setLoading(false)
    })
    .catch((error)=>{
      console.log(error);
      setLoading(false);
    })
    axios.get(`${url}/note`)
    .then((res)=>{
      setNote(res.data.data);
      setLoading(false)
    })
    .catch((error)=>{
      console.log(error);
      setLoading(false);
    })
  },[]);
  const handleClick = (str) =>{
    if(str==="inprogress"){
      setProgress("inprogress");
    }
    else if(str==="completed"){
      setProgress("completed");
    }
    else if(str==="incompleted"){
      setProgress("incompleted");
    }
    else{
      setProgress("all");
    }
  }

  return (
    <div className="home-container">
      <div className="task-container">
      <div className="task-title-container">
      <h1>Tasks</h1>
      <Link to ="/task/create">
      <div className="add-btn">Add Task 
        <img src={add} alt=""
        width={20}
        height={20}
        />
        </div>
        </Link>
        </div>
        <div className="progress-tags">
            <div className="tags progress-tag" onClick={()=>handleClick("all")}>all</div>
            <div className="tags progress-tag" onClick={()=>handleClick("inprogress")}>In Progress</div>
            <div className="tags progress-tag" onClick={()=>handleClick("completed")}>completed</div>
            <div className="tags progress-tag" onClick={()=>handleClick("incompleted")}>Incompleted</div>
        </div>
        <TaskCard task = {task} loading={loading} val={progress}/>
        <div className="task-title-container">
      <h1>Notes</h1>
      < Link to="/note/create">
      <div className="add-btn">Add Note
        <img src={add} alt=""
        width={20}
        height={20}
        />
        </div>
        </Link>
        </div>
        <NoteCard note ={note} loading={loading}/>
      </div>
    </div>
  )
}

export default Home