import { MdEditNote } from "react-icons/md";
import "./card.css";
function Card({ course, deleteCourse, backgroundColor, openModal }) {
  console.log(course);
  return (
    <div className="card">
      <div
        className="card-img-top"
        style={{
          backgroundColor,
          width: "100%",
          height: "150px",
        }}
      ></div>

      <div class="card-body">
        <h5 class="card-title">{course.name}</h5>
        <p class="card-text">
          {course.number}: {course.startDate} - {course.endDate}
        </p>
        <p class="card-text">202410_1 Fall 2023 Semester Full Term</p>
        <MdEditNote className="fas-1" />
        <button
          className="btn btn-danger"
          onClick={(event) => {
            event.preventDefault();
            deleteCourse(course._id.$oid);
          }}
        >
          Delete
        </button>
        <button
          className="btn btn-primary"
          onClick={(event) => {
            event.preventDefault();
            openModal(course);
          }}
        >
          Edit
        </button>
      </div>
    </div>
  );
}
export default Card;
