import { Outlet } from "react-router-dom";
import Navbar from "../../Pages/Shared/Navbar/Navbar";
import Footer from "../../Pages/Shared/Footer/Footer";

const Root = () => {
  return (
    <div className="">
      <Navbar />
      <div className="px-20 my-4">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
