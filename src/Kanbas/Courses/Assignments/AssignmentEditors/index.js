import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import { BsCheckCircleFill } from "react-icons/bs";
import { FaEllipsisV } from "react-icons/fa";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId
  );

  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div className="row">
      <div className="col-10 align-items-center">
        <button className="float-end m-1 p-2">
          <FaEllipsisV className="float-end" />
        </button>
        <h5 className="mx-2 my-1 float-end text-success ">Pulished</h5>
        <BsCheckCircleFill className="float-end mt-2 text-success" size={20} />
      </div>
      <div className="col-10">
        <hr />
        <h4>Assignment Name</h4>
        <input value={assignment.title} className="form-control mb-2" />
        <hr />
        <button onClick={handleSave} className="btn btn-success m-1 float-end">
          Save
        </button>
        <Link
          to={`/Kanbas/Courses/${courseId}/Assignments`}
          className="btn btn-secondary rounded-0 m-1 float-end"
        >
          Cancel
        </Link>
      </div>
    </div>
  );
}

export default AssignmentEditor;
