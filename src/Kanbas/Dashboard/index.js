import { Link } from "react-router-dom";
import Card from "./card";
import CourseModal from "./CourseModal";
import { useState } from "react";
import "./index.css";
function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}) {
  const colors = [
    "#1a1a1a", // Dark gray
    "#0e4c92", // Dark blue
    "#0b3d91", // Darker blue
    "#08306b", // Navy blue
    "#36454f", // Charcoal
    "#800000", // Maroon
    "#4a005e", // Dark purple
    "#013220", // Dark green
    "#492400", // Dark brown
    "#7b3f00", // Darker brown
    "#3c2f2f", // Coffee
    "#1c313a", // Midnight blue
    "#0d2b1e", // Dark forest green
    "#5d001e", // Dark red
    "#2f1b25", // Eggplant
    "#1c0e22", // Blackcurrant
    "#172a3a", // Denim dark
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (courseToEdit = null) => {
    if (courseToEdit) {
      setCourse(courseToEdit);
    } else {
      setCourse({
        name: "New Course",
        number: "New Number",
        startDate: "2023-09-10",
        endDate: "2023-12-15",
      });
    }
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="">
      <h1>Dashboard</h1>
      <hr />
      <h2 className="indent-left">
        Published Course ({courses.length})
        <button className="Add-btn" onClick={() => openModal()}>
          Add
        </button>
      </h2>
      <hr />

      <CourseModal
        course={course}
        setCourse={setCourse}
        isOpen={isModalOpen}
        closeModal={closeModal}
        addNewCourse={addNewCourse}
        updateCourse={updateCourse}
      />

      <div className="dashboard indent-left list-group">
        <div className="row">
          {courses.map((course, index) => (
            <div className="col-7 col-sm-6 col-md-5 col-lg-4 col-xl-3 col-xxl-2">
              <Link
                key={course._id}
                to={`/Kanbas/Courses/${course._id}`}
                className="list-group-item"
              >
                {
                  <Card
                    course={course}
                    deleteCourse={deleteCourse}
                    openModal={openModal}
                    backgroundColor={
                      index < colors.length
                        ? colors[index]
                        : colors[index % colors.length]
                    }
                  />
                }
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
