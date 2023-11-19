import { FaEllipsisV } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ModuleList.css";
import { useParams } from "react-router";
import { BsCheckCircleFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./ModulesReducer";
import * as client from "./client";
function ModuleList() {
  const { courseId } = useParams();
  console.log(courseId);
  const modules = useSelector((state) => state.ModulesReducer.modules);
  const module = useSelector((state) => state.ModulesReducer.module);
  const dispatch = useDispatch();
  useEffect(() => {
    client
      .findModulesForCourse(courseId)
      .then((modules) => dispatch(setModules(modules)));
  }, [courseId]);
  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };
  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };

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
        <button className="btn btn-success" onClick={handleAddModule}>
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
                  onClick={() => handleDeleteModule(module._id)}
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
