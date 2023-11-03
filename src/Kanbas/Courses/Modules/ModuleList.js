import { FaEllipsisV } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ModuleList.css";
import { useParams } from "react-router";
import { BsCheckCircleFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./ModulesReducer";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.ModulesReducer.modules);
  const module = useSelector((state) => state.ModulesReducer.module);
  const dispatch = useDispatch();

  return (
    <ul className="content-list list-group">
      <li className="list-group-item d-flex justify-content-around">
        <input
          value={module.name}
          onChange={(e) =>
            dispatch(setModule({ ...module, name: e.target.value }))
          }
        />
        <textarea
          value={module.description}
          onChange={(e) =>
            dispatch(setModule({ ...module, description: e.target.value }))
          }
        />
        <button
          className="btn btn-success"
          onClick={() => dispatch(addModule({ ...module, course: courseId }))}
        >
          Add
        </button>
        <button
          className="btn btn-primary"
          onClick={() => dispatch(updateModule(module))}
        >
          Update
        </button>
      </li>

      {modules &&
        modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <nav className="list-group-item justify-content-between">
              <div>
                <h3>{module.name}</h3>
                <p>{module.description}</p>
              </div>
              <div>
                <button
                  className="btn btn-success"
                  onClick={() => dispatch(setModule(module))}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => dispatch(deleteModule(module._id))}
                >
                  Delete
                </button>
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
