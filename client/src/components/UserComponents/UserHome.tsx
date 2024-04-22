import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";


const UserHome = () => {
  return (
    <div className="grid grid-cols-5 ">
      <div className="col-span-1 sticky top-0 ">
        <Sidebar />
      </div>
      <div className="col-span-4">
        <Outlet />
      </div>
    </div>
  );
};

export default UserHome;
