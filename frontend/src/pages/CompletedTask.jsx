import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
// import dotenv from 'dotenv';
// dotenv.config();
const url = import.meta.env.VITE_MAIN_URL;
const CompletedTask = () => {
  const [ loading, setLoading ] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(()=>{
    setLoading(true);
    var data;
    axios.get(`${url}/task/${id}`)
    .then((res)=>{
      data = {task:res.data.task,
              priority: res.data.priority,
              progress: "completed"
      };
      axios.put(`${url}/task/${id}`,data)
      .then(()=>{
        console.log("Data Updated");
        navigate('/');
    })
    })
    .catch((error)=>{
      console.log(error);
    })
  },[])
  return (
    <div>{
      loading ? <Spinner/> :""
    }</div>
  )
}

export default CompletedTask;