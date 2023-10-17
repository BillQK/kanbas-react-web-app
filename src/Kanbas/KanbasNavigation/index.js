import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { RiDashboard3Line } from "react-icons/ri";
import { MdHelpCenter, MdOutlineAccountCircle } from "react-icons/md";
import {
  FaBook,
  FaCreativeCommons,
  FaHistory,
  FaStudiovinari,
} from "react-icons/fa";
import { BsCalendar2Week, BsInbox } from "react-icons/bs";

function KanbasNavigation() {
  const { pathname } = useLocation();
  const links = [
    "Account",
    "Dashboard",
    "Courses",
    "Calendar",
    "Inbox",
    "History",
    "Studio",
    "Commons",
    "Help",
  ];
  const linksToIconsMap = {
    Account: (
      <MdOutlineAccountCircle
        className={`fs-1 ${
          pathname.includes("Account") ? "account" : "text-light"
        }`}
      />
    ),
    Dashboard: <RiDashboard3Line className="fs-1 text" />,
    Courses: <FaBook className="fs-1 text" />,
    Calendar: <BsCalendar2Week className="fs-1 text" />,
    Inbox: <BsInbox className="fs-1 text" />,
    History: <FaHistory className="fs-1 text" />,
    Studio: <FaStudiovinari className="fs-1 text" />,
    Commons: <FaCreativeCommons className="fs-1 text" />,
    Help: <MdHelpCenter className="fs-1 text" />,
  };

  return (
    <div className="wd-kanbas-navigation list-group">
      <img
        src="https://instructure-uploads.s3.amazonaws.com/account_145230000000000001/attachments/949/NU_MonoLVX_RGB_RW.png"
        alt="NEU Logo"
      />
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item text-center ${
            pathname.includes(link) && "active"
          }`}
        >
          {linksToIconsMap[link]}
          <br />
          {link}
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;
