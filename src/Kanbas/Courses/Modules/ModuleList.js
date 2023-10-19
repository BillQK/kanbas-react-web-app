import { FaEllipsisV } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ModuleList.css"; // Replace 'yourCssFileName' with the actual name of your CSS file
import db from "../../Database";
import { useParams } from "react-router";
import { BsCheckCircleFill } from "react-icons/bs";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <ul className="content-list list-group">
      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <nav className="list-group-item justify-content-between">
            <div>
              <h3>{module.name}</h3>
              <p>{module.description}</p>
            </div>
            <div>
              <BsCheckCircleFill
                size={20}
                style={{ marginRight: "10px", color: "green" }}
              />
              <FaEllipsisV size={20} />
            </div>
          </nav>
        ))}
    </ul>
  );
}

export default ModuleList;
