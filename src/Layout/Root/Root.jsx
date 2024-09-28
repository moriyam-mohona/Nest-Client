import { Outlet } from "react-router-dom";
import Navbar from "../../Pages/Shared/Navbar/Navbar";
import Footer from "../../Pages/Shared/Footer/Footer";

const Root = () => {
  return (
    <div className="overflow-x-hidden">
      <h2 className="bg-red-300 text-center font-bold py-2">
        This Site is Under Development
      </h2>
      <Navbar />
      <div className="px-5 lg:px-10 my-4">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
