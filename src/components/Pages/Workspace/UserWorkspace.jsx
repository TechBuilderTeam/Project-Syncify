import Workspace from "./Workspace";
import CreateWorkspace from "./CreateWorkspace";
const UserWorkspace = () => {
  return (
    <div className="h-screen">
      <CreateWorkspace className="" />
      <Workspace />
    </div>
  );
};

export default UserWorkspace;
