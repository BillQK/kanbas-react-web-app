import ModuleList from "../Modules/ModuleList";
import ModuleToolBar from "../Modules/ModuleToolBar";
import StatusBar from "./StatusBar";
function Home() {
  return (
    <div className="row">
      <div className="col-8">
        <ModuleToolBar />
        <hr />
        <ModuleList />
      </div>
      <div className="col-2 flex-fill justify-content-start d-none d-xxl-flex ">
        <StatusBar />
      </div>
    </div>
  );
}
export default Home;
