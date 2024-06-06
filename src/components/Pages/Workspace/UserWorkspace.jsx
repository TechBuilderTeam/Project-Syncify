import Workspace from "./Workspace";
import CreateWorkspace from "./CreateWorkspace";
import { useState } from "react";
const UserWorkspace = () => {
  const [load, setLoad] = useState(false);
  return (
    <div className="">
      <CreateWorkspace className="" load={load} setLoad={setLoad} />
      <Workspace load={load} setLoad={setLoad}/>
    </div>
  );
};

export default UserWorkspace;
