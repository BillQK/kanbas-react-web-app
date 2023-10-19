import ModuleList from "./ModuleList";
import ModuleToolBar from "./ModuleToolBar";

function Modules() {
  return (
    <div className="row">
      <div className="col-8">
        <ModuleToolBar />
        <hr />
        <ModuleList />
      </div>
    </div>
  );
}
export default Modules;
