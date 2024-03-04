import Spinner from "../Spinner";
import { completed, deleteIcon, edit, star } from "../../assets";
import { Link } from "react-router-dom";


const TaskCard = ({task, loading, val ='all' }) => {
    var data;
    if(val ==='completed'){
       data = task.filter((t)=> t.progress === "completed");
    }
    else if(val ==='inprogress'){
       data = task.filter((t)=> t.progress === "inprogress");
    }
    else if(val ==='incompleted'){
       data = task.filter((t)=> t.progress === "incompleted");
    }
    else{
      data = task;
      console.log(val);
    }
  return (
    <div className="all-tasks">
      <div className="warning">{ data.length === 0 ? <h2>No Task is Added</h2> :"" }</div>
        {
          loading ? <Spinner/> :
          data.map((item)=>{
            var cle = "low-item";
            if(item.priority === "high"){
               cle  = "high-item";
            }
            else if(item.priority === "medium"){
               cle  = "medium-item";
            }
            return (<div key={item._id} 
            className={`single-task ${cle}`}
            
            >
              <div className="star-task">
                <img src={star} alt=""
                width={18}
                height={18}
                />
                <p>{item.task}</p>
              </div>
              <div className="links">
              <Link to={`/task/edit/${item._id}`}>
              <img src={edit} alt=""
                width={18}
                height={18}
              />
              </Link>
              <Link to={`/task/delete/${item._id}`}>
              <img src={deleteIcon} alt=""
                width={18}
                height={18}
              />
              </Link>
              <Link to={`/task/completed/${item._id}`}>
              <img src={completed} alt=""
                width={18}
                height={18}
              />
              </Link>
              </div>
            </div>
          )})
        }
        </div>
  )
}

export default TaskCard