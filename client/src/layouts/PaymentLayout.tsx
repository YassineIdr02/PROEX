import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const PaymentLayout = () => {
  return (
    <div className="grid grid-cols-5">
      <div className="col-span-1 sticky top-0 left-0">
        <Sidebar />
      </div>
      <div className="col-span-4">
        <Outlet />
        <footer className="footer footer-center p-4 text-base-content mt-[16%] ">
          <aside>
            <p>Copyright © 2024 - Transactions secured with state-of-the-art encryption for your peace of mind.</p>
          </aside>
        </footer>
      </div>
    </div>
  );
};

export default PaymentLayout;
