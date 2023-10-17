import { Link } from "react-router-dom";
import db from "../Database";
import Card from "./card";
import "./index.css";
function Dashboard() {
  const courses = db.courses;
  return (
    <div className="">
      <h1>Dashboard</h1>
      <hr />
      <h2>Published Course ({courses.length})</h2>
      <hr />
      <div className="dashboard list-group">
        <div className="row">
          {courses.map((course) => (
            <div className="col-7 col-sm-6 col-md-5 col-lg-4 col-xl-3 col-xxl-3">
              <Link
                key={course._id}
                to={`/Kanbas/Courses/${course._id}`}
                className="list-group-item"
              >
                {<Card course={course} />}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
