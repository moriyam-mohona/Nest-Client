import { RiArrowDropDownLine } from "react-icons/ri";
import headphoneIcon from "../../../assets/Icons/headphone.png";
import { MdGridView, MdOutlineLocalFireDepartment } from "react-icons/md";
import { Link } from "react-router-dom";
const BottomNavbar = () => {
  return (
    <div className="flex justify-between items-center px-10">
      <div className="flex justify-between gap-5">
        {/* Browse All category Button */}
        <div className="bg-blue-800 px-2 py-1 rounded-md">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="flex items-center text-white "
            >
              <MdGridView className="mx-1" />
              <span className="text-sm ">Browse All Categories</span>
              <RiArrowDropDownLine className="text-2xl" />
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content bg-base-100 z-[1] w-60 p-3 shadow"
            >
              <li>
                <Link to="/">Cake & Milk</Link>
              </li>
              <li>
                <Link to="/">Coffees & Teas</Link>
              </li>
              <li>
                <Link to="/">Pet Foods</Link>
              </li>
              <li>
                <Link to="/">Vegetables</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Nav Items  */}
        <div className="flex items-center space-x-4 text-sm font-semibold">
          <Link to="/" className="hover:text-blue-800 flex items-center gap-1">
            <MdOutlineLocalFireDepartment className="text-blue-800 text-xl" />
            Deals
          </Link>
          <Link to="/" className="hover:text-blue-800">
            Home
          </Link>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="flex items-center">
              <span className="text-md">Shop</span>
              <RiArrowDropDownLine className="text-2xl" />
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content bg-base-100 z-[1] w-60 p-3 shadow"
            >
              <li>
                <Link to="/">Category 1</Link>
              </li>
              <li>
                <Link to="/">Category 2</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="hover:text-blue-800">
            About
          </Link>

          <div className="dropdown">
            <div tabIndex={0} role="button" className="flex items-center">
              <span className="text-md">Vendors</span>
              <RiArrowDropDownLine className="text-2xl" />
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content bg-base-100 z-[1] w-60 p-3 shadow"
            >
              <li>
                <Link to="/">Category 1</Link>
              </li>
              <li>
                <Link to="/">Category 2</Link>
              </li>
            </ul>
          </div>

          <div className="dropdown">
            <div tabIndex={0} role="button" className="flex items-center">
              <span className="text-md"> Mega menu</span>
              <RiArrowDropDownLine className="text-2xl" />
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content bg-base-100 z-[1] w-60 p-3 shadow"
            >
              <li>
                <Link to="/">Category 1</Link>
              </li>
              <li>
                <Link to="/">Category 2</Link>
              </li>
            </ul>
          </div>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="flex items-center">
              <span className="text-md">Blog</span>
              <RiArrowDropDownLine className="text-2xl" />
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content bg-base-100 z-[1] w-60 p-3 shadow"
            >
              <li>
                <Link to="/">Category 1</Link>
              </li>
              <li>
                <Link to="/">Category 2</Link>
              </li>
            </ul>
          </div>

          <div className="dropdown">
            <div tabIndex={0} role="button" className="flex items-center">
              <span className="text-md">Pages</span>
              <RiArrowDropDownLine className="text-2xl" />
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content bg-base-100 z-[1] w-60 p-3 shadow"
            >
              <li>
                <Link to="/">Category 1</Link>
              </li>
              <li>
                <Link to="/">Category 2</Link>
              </li>
            </ul>
          </div>
          <a to="/" className="hover:text-blue-800">
            Contact
          </a>
        </div>
      </div>

      {/* Helpline  */}
      <div className="flex gap-1 items-center">
        <img src={headphoneIcon} alt="" className="w-6 h-6" />
        <div className="flex flex-col">
          <p className="text-xl text-blue-800 font-bold">1900 - 888</p>
          <p className="text-xs">24/7 Support Center</p>
        </div>
      </div>
    </div>
  );
};

export default BottomNavbar;
