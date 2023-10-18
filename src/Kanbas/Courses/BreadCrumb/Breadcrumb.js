import { FaBars } from "react-icons/fa"; // Assuming you're using react-icons for the FaBars icon
import "./Breadcrumb.css";
import StudentViewButton from "../StudentViewButton";
import { useLocation } from "react-router";
const Breadcrumb = ({ course }) => {
  const breadcrumbStyle = {
    "--bs-breadcrumb-divider": "'>'", // Set the divider to '>'
    "--bs-breadcrumb-item-divider-width": "30px", // Set the width of the divider to match the icon size
  };
  const { pathname } = useLocation();
  const pathSegments = pathname.split("/");
  const currentDirectory =
    pathSegments[pathSegments.length - 1] ||
    pathSegments[pathSegments.length - 2];
  return (
    <div className="breadcrumb-container">
      <div className="breadcrumb-wrapper">
        <nav style={breadcrumbStyle}>
          <ol className="breadcrumb">
            <FaBars className="breadcrumb-icon fa-2 text" size={30} />
            <li className="breadcrumb-item">
              <a href="/">{course.number}</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {currentDirectory === "ZoomMeetings"
                ? "Zoom Meetings"
                : currentDirectory}
            </li>
          </ol>
        </nav>
        {currentDirectory === "Modules" && <StudentViewButton />}
      </div>
      <hr />
    </div>
  );
};
export default Breadcrumb;
