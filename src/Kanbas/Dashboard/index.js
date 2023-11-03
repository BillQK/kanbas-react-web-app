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
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "cyan",
    "magenta",
    "teal",
    "lime",
    "pink",
    "orange",
    "violet",
    "indigo",
    "brown",
    "grey",
    "black",
    "white",
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
