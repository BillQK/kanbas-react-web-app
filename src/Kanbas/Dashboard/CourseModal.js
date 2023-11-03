import React from "react";
import Modal from "react-modal";
import "./CourseModal.css";
function CourseModal({
  course,
  setCourse,
  isOpen,
  closeModal,
  addNewCourse,
  updateCourse,
}) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Course Modal"
      id="custom-modal"
    >
      <h2>{course._id ? "Edit Course" : "Add Course"}</h2>
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

      {course._id ? (
        <button
          className="btn btn-success"
          onClick={() => {
            updateCourse();
            closeModal();
          }}
        >
          Confirm Edit
        </button>
      ) : (
        <button
          className="btn btn-success"
          onClick={() => {
            addNewCourse();
            closeModal();
          }}
        >
          Confirm Add
        </button>
      )}

      <button className="btn btn-primary" onClick={closeModal}>
        Cancel
      </button>
    </Modal>
  );
}

export default CourseModal;
