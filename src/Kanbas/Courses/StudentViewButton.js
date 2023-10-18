import { FaGlasses } from "react-icons/fa";

function StudentViewButton() {
  return (
    <button className="btn btn-secondary btn-light ">
      <FaGlasses className="p-1" size={25} />
      Student View
    </button>
  );
}
export default StudentViewButton;
