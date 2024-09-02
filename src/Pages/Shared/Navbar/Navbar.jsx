import BottomNavbar from "../../../Components/NavComponents/BottomNavbar/BottomNavbar";
import MidNavbar from "../../../Components/NavComponents/MidNavbar/MidNavbar";
import TopNavbar from "../../../Components/NavComponents/TopNavbar/TopNavbar";

const Navbar = () => {
  return (
    <div className="mx-auto">
      <TopNavbar />
      <hr />
      <MidNavbar />
      <hr />
      <BottomNavbar />
      <hr />
    </div>
  );
};

export default Navbar;
