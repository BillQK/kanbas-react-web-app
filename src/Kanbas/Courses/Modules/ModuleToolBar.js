import { BsCheckCircle } from "react-icons/bs";
import { FaEllipsisV } from "react-icons/fa";
import "./ModuleToolBar.css";
function ModuleToolBar() {
  return (
    <div className="p-2 d-flex">
      <div className="p-2 flex-fill">
        <button
          className="btn btn-secondary btn-light"
          style={{ display: "inline" }}
        >
          Collapse All
        </button>
      </div>
      <div className="p-2 flex-fill ">
        <button
          className="btn btn-secondary btn-light"
          style={{ display: "inline" }}
        >
          View Progress
        </button>
      </div>
      <div
        className="dropdown p-2 flex-fill"
        style={{ display: "inline", al: "center" }}
      >
        <button
          className="btn btn-secondary btn-light dropdown-toggle"
          type="button"
          id="publishDropdown"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{ display: "inline" }}
        >
          <BsCheckCircle className="text-success checkmark" />
          Publish All
        </button>
        <ul
          className="dropdown-menu float-end"
          aria-labelledby="publishDropdown"
        >
          <li>
            <a className="dropdown-item" href="/">
              Option 1
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/">
              Option 2
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/">
              Option 3
            </a>
          </li>
        </ul>
      </div>
      <div className="p-2 flex-fill">
        <button className="btn btn-danger" style={{ display: "inline" }}>
          Module
        </button>
      </div>
      <div className="p-2 flex-fill">
        <button
          className="btn btn-secondary btn-light"
          style={{ display: "inline" }}
        >
          <FaEllipsisV />
        </button>
      </div>
    </div>
  );
}

export default ModuleToolBar;
