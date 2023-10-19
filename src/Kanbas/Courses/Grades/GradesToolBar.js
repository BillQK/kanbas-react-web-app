import {
  FaCog,
  FaFileExport,
  FaFileImport,
  FaFilter,
  FaSearch,
} from "react-icons/fa";

function GradesToolBar() {
  return (
    <div className="col-11">
      <div class="d-flex justify-content-end mb-3">
        <button type="button" class="btn btn-secondary btn-light">
          <FaFileImport /> Import
        </button>
        <button
          type="button"
          class="btn btn-secondary dropdown-toggle btn-light mx-1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <FaFileExport /> Export
        </button>
        <button type="button" class="btn btn-secondary btn-light">
          <FaCog />
        </button>
      </div>
      <div>
        <div class="row mb-3">
          <div class="col-md-6">
            <h5>Student Names</h5>
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">
                <FaSearch />
              </span>
              <select class="form-select" aria-label="Default select example">
                <option selected>Search Students</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
            </div>
          </div>
          <div class="col-md-6">
            <h5>Assignment Names</h5>
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">
                <FaSearch />
              </span>
              <select class="form-select" aria-label="Default select example">
                <option selected>Search Assignments</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <button type="button" class="btn btn-secondary btn-light">
        <FaFilter /> Apply Filters
      </button>
      <br />
      <br />
    </div>
  );
}
export default GradesToolBar;
