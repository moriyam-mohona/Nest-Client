import BottomNavbar from "../../../Components/NavComponents/BottomNavbar/BottomNavbar";
import MidNavbar from "../../../Components/NavComponents/MidNavbar/MidNavbar";
import TopNavbar from "../../../Components/NavComponents/TopNavbar/TopNavbar";

const Navbar = () => {
  return (
    <div className="mx-auto">
      <TopNavbar />
      <hr />
      <div className="flex flex-row-reverse justify-between lg:flex-col">
        <div className="w-full md:w-3/5 lg:w-full">
          <MidNavbar />
        </div>
        <hr className="hidden lg:flex" />
        <BottomNavbar />
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
