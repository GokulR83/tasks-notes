import './NoteCard.css'
import { deleteIcon, edit } from '../../assets'
import Spinner from '../Spinner'
import { Link } from 'react-router-dom'

const NoteCard = ({note , loading }) => {
  return (
    <div className='all-notes'>
        <div className="warning">{ note.length === 0 ? <h2>No Note is Added</h2> :"" }</div>
        {
            loading ? <Spinner/> :
            note.map((item)=>{
                return(
                    <div key={item._id}  className='single-item'>
                        <div className="title-tag">
                            <h3>{item.note}</h3>
                            <div className='tag-note'>
                                <div className="tags note-tag">{item.tags}</div>
                            </div>
                        </div>
                        <div className="desc">
                            <p>{item.description}</p>
                        </div>
                        <div className="date-link">
                                {item.createdAt.slice(0,10)}
                                <div className="links">
                                    <Link to={`/note/edit/${item._id}`}>
                                    <img src={edit} alt=""
                                        width={18}
                                        height={18}
                                    />
                                    </Link>
                                    <Link to={`/note/delete/${item._id}`}>
                                    <img src={deleteIcon} alt=""
                                        width={18}
                                        height={18}
                                    />
                                    </Link>
                                </div>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default NoteCard;