import { MdEditNote } from "react-icons/md";
import "./card.css";
function Card({ course }) {
  return (
    <div class="card">
      <img
        src="https://htmlcolorcodes.com/assets/images/colors/dark-blue-color-solid-background-1920x1080.png"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">{course.name}</h5>
        <p class="card-text">
          {course.number}: {course.startDate} - {course.endDate}
        </p>
        <p class="card-text">202410_1 Fall 2023 Semester Full Term</p>
        <MdEditNote className="fas-1" />
      </div>
    </div>
  );
}
export default Card;
