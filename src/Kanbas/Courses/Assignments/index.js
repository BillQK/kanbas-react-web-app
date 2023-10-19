import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import AssignmentToolBar from "./AssignmentToolBar/AssignmentToolBar";
import { FaEllipsisV } from "react-icons/fa";
import { BsCheckCircleFill } from "react-icons/bs";
import "./index.css";
function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  return (
    <div className="row">
      <div className="assignment-list col-8 list-group">
        <AssignmentToolBar />
        <hr />
        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="assignment-list d-flex justify-content-between list-group-item"
          >
            {assignment.title}

            <div>
              <BsCheckCircleFill
                size={20}
                style={{ marginRight: "10px", color: "green" }}
              />
              <FaEllipsisV size={20} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Assignments;
