import { useState } from "react";
import Spinner from "../components/Spinner";
import axios from "axios";
import BackButton from "../components/BackButton";
import { useNavigate } from "react-router-dom";
import "./CreateNote.css";


const CreateNote = () => {
  const [ notes, setNotes ] = useState({ note:"", description:"", tags:"personal" });
  const [ loading, setLoading ] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = () =>{
    if(notes.note ===""){
      alert("Enter the All Required Field");
    }
    else{
      setLoading(true);
      console.log(notes);
      axios.post("http://localhost:8000/note/",notes)
      .then(()=>{
        setLoading(false);
        navigate("/");
      })
      .catch((error)=>{
        console.log(error);
      })
      setNotes({ note:"", description:"", tags:"personal" });
    } 
  }
  const handleChange = (event) =>{
    setNotes((oldData)=>{
      const data =  {...oldData, [ event.target.name ] : event.target.value }; 
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
      <h1 className="task-heading">Create Note</h1>
      <div className="create-container">
        <div className="task">
        <label htmlFor="note">Title:</label>
        <input type="text" name="note" placeholder="enter your title"  value={notes.note} onChange={handleChange} />
        </div>
        <div className="priority">
        <label htmlFor="tags">tag:</label>
        <select onChange={handleChange} name="tags">
          <option value="personal">Personal</option>
          <option value="study">Study</option>
          <option value="random">Random</option>
        </select>
        </div>
        
        <div className="task">
        <label htmlFor="description">Description:</label>
        <textarea type="text"
        name="description"  
        value={notes.description} 
        onChange={handleChange}
        rows={8}
        cols={40} 
        />
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

export default CreateNote