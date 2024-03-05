import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
const url = import.meta.env.VITE_MAIN_URL;

const DeleteTask = () => {
  const [ loading, setLoading ] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(()=>{
    setLoading(true);
    axios.delete(`${url}/task/${id}`)
    .then(()=>{
      setLoading(false)
        navigate("/");
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

export default DeleteTask