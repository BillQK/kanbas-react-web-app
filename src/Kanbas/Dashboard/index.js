import { Link } from "react-router-dom";
import Card from "./card";
import "./index.css";
function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}) {
  return (
    <div className="">
      <h1>Dashboard</h1>
      <hr />
      <h2 className="indent-left">Published Course ({courses.length})</h2>
      <hr />
      <h5>Course</h5>
      <input
        value={course.name}
        className="form-control"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />

      <input
        value={course.number}
        className="form-control"
        onChange={(e) => setCourse({ ...course, number: e.target.value })}
      />
      <input
        value={course.startDate}
        className="form-control"
        type="date"
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
      />
      <input
        value={course.endDate}
        className="form-control"
        type="date"
        onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
      />
      <button onClick={addNewCourse}>Add</button>
      <button onClick={updateCourse}>Update</button>

      <div className="dashboard indent-left list-group">
        <div className="row">
          {courses.map((course) => (
            <div className="col-7 col-sm-6 col-md-5 col-lg-4 col-xl-3 col-xxl-2">
              <Link
                key={course._id}
                to={`/Kanbas/Courses/${course._id}`}
                className="list-group-item"
              >
                {<Card course={course} />}
              </Link>
              <button
                onClick={(event) => {
                  event.preventDefault();
                  setCourse(course);
                }}
              >
                Edit
              </button>

              <button
                onClick={(event) => {
                  event.preventDefault();
                  deleteCourse(course._id);
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
