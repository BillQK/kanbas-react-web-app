import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css";
function CourseNavigation() {
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "ZoomMeetings",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
    "Panopto",
    "Dicussion",
    "Announcement",
    "Pages",
    "Files",
    "Rubrics",
    "Outcomes",
  ];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
    <div
      className="wd-course-navigation list-group d-none d-lg-block"
      style={{ width: 150 }}
    >
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/Courses/${courseId}/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}
        >
          {link === "ZoomMeetings" ? "Zoom Meetings" : link}
        </Link>
      ))}
    </div>
  );
}

export default CourseNavigation;
