import { FaEllipsisV } from "react-icons/fa";
import "./AssignmentToolBar.css";

function AssignmentToolBar() {
  return (
    <div className="toolbar">
      <input type="text" placeholder="Search for Assignment" />
      <button>+Group</button>
      <button className="red-button">+Assignment</button>
      <button>
        <FaEllipsisV />
      </button>
    </div>
  );
}

export default AssignmentToolBar;
