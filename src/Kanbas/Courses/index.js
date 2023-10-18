import db from "../../Kanbas/Database";
import "./index.css";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import AssignmentEditor from "./Assignments/AssignmentEditors";
import Assignment from "./Assignments";
import Grades from "./Grades/Index";
import Breadcrumb from "./BreadCrumb/Breadcrumb";
function Courses() {
  const { courseId } = useParams();
  const course = db.courses.find((course) => course._id === courseId);
  return (
    <>
      <div className="row">
        <div className="col">
          <Breadcrumb course={course} />
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <CourseNavigation />
        </div>
        <div className="col-9">
          <div
            className="overflow-y-scroll bottom-0 end-0"
            style={{
              left: "320px",
              top: "50px",
            }}
          >
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />

              <Route path="Assignments" element={<Assignment />} />
              <Route
                path="Assignments/:assignmentId"
                element={<AssignmentEditor />}
              />
              <Route path="Grades" element={<Grades />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}
export default Courses;
