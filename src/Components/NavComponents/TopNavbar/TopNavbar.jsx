import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const TopNavbar = () => {
  return (
    <div className=" justify-between py-2 px-10 hidden lg:flex">
      <div className="flex gap-3 items-center">
        <Link to="/" className="text-sm">
          About Us
        </Link>
        <span>|</span>
        <Link to="/" className="text-sm">
          My Account
        </Link>
        <span>|</span>
        <Link to="/" className="text-sm">
          Wishlist
        </Link>
        <span>|</span>
        <Link to="/" className="text-sm">
          Order Tracking
        </Link>
      </div>
      <div className="flex gap-3 items-center">
        <p className="text-sm">Need help? Call Us:+ 1800 900</p>
        <span>|</span>

        <div className="dropdown">
          <div tabIndex={0} role="button" className="flex items-center">
            <span className="text-sm">English</span>
            <RiArrowDropDownLine className="text-2xl" />
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content bg-base-100 z-[5] w-32 p-3 shadow"
          >
            <li>
              <a href="#">Bangla</a>
            </li>
            <li>
              <a href="#">Spanish</a>
            </li>
            <li>
              <a href="#">French</a>
            </li>
          </ul>
        </div>
        <span>|</span>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="flex items-center">
            <span className="text-sm">USD</span>
            <RiArrowDropDownLine className="text-2xl" />
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content bg-base-100 z-[1] w-32 p-3 shadow"
          >
            <li>
              <a href="#">EUR</a>
            </li>
            <li>
              <a href="#">CHF</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
