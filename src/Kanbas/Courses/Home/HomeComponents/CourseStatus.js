import HomeSection from "./HomeSection";
import LinkButton from "./LinkButton";
import "./CourseStatus.css";
import { MdCircle, MdSpeakerPhone } from "react-icons/md";
import { FaColumns, FaFileImport } from "react-icons/fa";
import { BsBell, BsViewList } from "react-icons/bs";
function CourseStatus() {
  const text = [
    "Import Existing Content",
    "Import From Commons",
    "Choose Home Page",
    "View Course Stream",
    "New Announcements",
    "New Analytics",
    "View Course Notifications",
  ];

  const icon = {
    [text[0]]: <FaFileImport className="icon" size={15} />,
    [text[1]]: <FaFileImport className="icon" size={15} />,
    [text[2]]: <MdCircle className="icon" size={15} />,
    [text[3]]: <FaColumns className="icon" size={15} />,
    [text[4]]: <MdSpeakerPhone className="icon" size={15} />,
    [text[5]]: <BsBell className="icon" size={15} />,
    [text[6]]: <BsViewList className="icon" size={15} />,
  };
  return (
    <div className="course-status">
      <ul cl>
        {text.map((text) => (
          <LinkButton
            text={text}
            icon={icon[text]}
            className="btn btn-secondary btn-light"
          />
        ))}
      </ul>
      <HomeSection
        title="To Do"
        links={[
          "Lecture CS4550.12631.202410 Sep 7 at 11:45am",
          "Lecture CS4550.12631.202410 Sep 11 at 11:45am",
          "CS5610 06 SP23 Lecture Sep 11 at 6pm",
        ]}
      />
      <HomeSection
        title="Coming Up"
        links={[
          "Lecture CS4550.12631.202410 Sep 7 at 11:45am",
          "Lecture CS4550.12631.202410 Sep 11 at 11:45am",
          "CS5610 06 SP23 Lecture Sep 11 at 6pm",
        ]}
        additionalLink="view calendar"
      />
    </div>
  );
}
export default CourseStatus;
