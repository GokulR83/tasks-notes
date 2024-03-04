import { Link } from "react-router-dom"
import "./BackButton.css";
const BackButton = ({ destination = '/' }) => {
  return (
      <Link to={destination} className="btn-link">
    <div className="back-btn">
      Back
    </div>
      </Link>
  )
}

export default BackButton