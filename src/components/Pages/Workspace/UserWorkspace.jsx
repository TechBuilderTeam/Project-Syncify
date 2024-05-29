
import Workspace from "./Workspace";
import CreateWorkspace from "./CreateWorkspace";
const UserWorkspace = () => {
  return (
    <div className="px-10 py-20">
      <h1>Workspace</h1>
      <div className="flex flex-col md:flex-row gap-10">
      <CreateWorkspace />
      <Workspace />
      </div>
     
    </div>
  );
};

export default UserWorkspace;
