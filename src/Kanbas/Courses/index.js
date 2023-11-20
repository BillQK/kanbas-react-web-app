import "./index.css";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import AssignmentEditor from "./Assignments/AssignmentEditors";
import Assignment from "./Assignments";
import Grades from "./Grades/Index";
import Breadcrumb from "./BreadCrumb/Breadcrumb";
import { useState, useEffect } from "react";
import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;
const URL = `${API_BASE}/courses`;
function Courses() {
  const { courseId } = useParams();
  const [course, setCourse] = useState({});
  const findCourseById = async (courseId) => {
    const response = await axios.get(`${URL}/${courseId}`);
    setCourse(response.data);
  };
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);

  return (
    <>
      <div className="row flex-filled">
        <div className="col">
          <Breadcrumb course={course} />
        </div>
      </div>
      <div className="row">
        <div className="col-3 content">
          <CourseNavigation />
        </div>
        <div className="col-9 flex-fill content">
          <div
            className="bottom-0 end-0"
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
