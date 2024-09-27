import Logo from "../../../assets/Logo.png";
import compare from "../../../assets/Icons/compare.png";
import wishlist from "../../../assets/Icons/wishlist.png";
import cart from "../../../assets/Icons/cart.png";
import account from "../../../assets/Icons/account.png";
import { CiLocationOn } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";

const MidNavbar = () => {
  return (
    <div className="flex justify-between items-center gap-2 py-2 px-10">
      <div>
        <img src={Logo} alt="Nest Logo" className="w-32" />
      </div>
      <div className="flex items-center border rounded-md ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="flex items-center">
            <span className="text-md ml-4">All Categories</span>
            <RiArrowDropDownLine className="text-2xl" />
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content bg-base-100 z-[1] w-60 p-3 shadow"
          >
            <li>
              <a href="#">Category 1</a>
            </li>
            <li>
              <a href="#">Category 2</a>
            </li>
          </ul>
        </div>
        <span className="mx-2">|</span>
        <label className="flex items-center justify-between w-80">
          <input
            type="text"
            className="p-2 h-[40px] focus:outline-none focus:ring-0 focus:border-none"
            placeholder="Search for items..."
            style={{
              paddingLeft: "16px", // Padding for the left side
              paddingRight: "16px", // Padding for the right side
            }}
          />
          <IoIosSearch className="text-gray-500 mr-4" />
        </label>
      </div>
      <div className="flex justify-between items-center gap-4">
        <div className="flex items-center gap-1 border rounded-md px-3 py-2 shadow-sm">
          <CiLocationOn />
          <p className="text-blue-800 text-sm">Your Location</p>
        </div>
        <div className="flex items-baseline gap-1">
          <div className="indicator">
            <span className="indicator-item badge badge-sm bg-blue-800 text-white py-2 px-1">
              3
            </span>
            <img src={compare} alt="" className="w-5 h-5" />
          </div>
          <p className="text-sm">Compare</p>
        </div>
        <div className="flex items-baseline gap-1">
          <div className="indicator">
            <span className="indicator-item badge badge-sm bg-blue-800 text-white py-2 px-1">
              3
            </span>
            <img src={wishlist} alt="" className="w-5 h-5" />
          </div>
          <p className="text-sm">Wishlist</p>
        </div>
        <div className="flex items-baseline gap-1">
          <div className="indicator">
            <span className="indicator-item badge badge-sm bg-blue-800 text-white py-2 px-1">
              3
            </span>
            <img src={cart} alt="" className="w-5 h-5" />
          </div>
          <p className="text-sm">Cart</p>
        </div>
        <div className="flex items-baseline gap-1">
          <img src={account} alt="" className="w-5 h-5" />
          <p className="text-sm">Account</p>
        </div>
      </div>
    </div>
  );
};

export default MidNavbar;
