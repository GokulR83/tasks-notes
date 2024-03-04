import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
const CompletedTask = () => {
  const [ loading, setLoading ] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(()=>{
    setLoading(true);
    var data;
    axios.get(`http://localhost:8000/task/${id}`)
    .then((res)=>{
      data = {task:res.data.task,
              priority: res.data.priority,
              progress: "completed"
      };
      axios.put(`http://localhost:8000/task/${id}`,data)
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