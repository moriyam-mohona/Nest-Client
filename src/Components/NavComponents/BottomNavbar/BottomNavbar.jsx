import { RiArrowDropDownLine } from "react-icons/ri";
import headphoneIcon from "../../../assets/Icons/headphone.png";
import { MdMenu, MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";

const navItems = [
  {
    title: "Deals",
    link: "/",
    dropdown: true,
    dropdownItems: [
      { name: "Deal 1", link: "/" },
      { name: "Deal 2", link: "/" },
    ],
  },
  { title: "Home", link: "/" },
  {
    title: "Shop",
    link: "/",
    dropdown: true,
    dropdownItems: [
      { name: "Laptops", link: "/" },
      { name: "Desktops", link: "/" },
      { name: "Accessories", link: "/" },
      { name: "Monitors", link: "/" },
    ],
  },
  { title: "About", link: "/" },
  {
    title: "Vendors",
    link: "/",
    dropdown: true,
    dropdownItems: [
      { name: "Vendor 1", link: "/" },
      { name: "Vendor 2", link: "/" },
    ],
  },
  {
    title: "Mega Menu",
    link: "/",
    dropdown: true,
    dropdownItems: [
      { name: "Category 1", link: "/" },
      { name: "Category 2", link: "/" },
    ],
  },
  { title: "Blog", link: "/" },
  { title: "Contact", link: "/" },
];

const BottomNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownToggle = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const closeDropdown = () => {
    setDropdownOpen(null);
  };

  return (
    <div className="sticky top-0 z-50 px-5 lg:px-10">
      <div className="flex justify-between items-center py-1">
        {/* Browse Categories Button */}
        <div className="relative hidden lg:flex">
          <button
            className="flex items-center bg-blue-800 text-white px-3 py-2 rounded-md"
            onClick={() => handleDropdownToggle(-1)}
          >
            Browse Categories <RiArrowDropDownLine className="ml-1" />
          </button>
          {dropdownOpen === -1 && (
            <ul className="absolute mt-10 rounded-md shadow-lg w-48 z-20 bg-white">
              {navItems
                .find((item) => item.title === "Shop")
                .dropdownItems.map((dropdownItem, idx) => (
                  <li key={idx} className="">
                    <Link
                      to={dropdownItem.link}
                      className="block px-4 py-2"
                      onClick={closeDropdown}
                    >
                      {dropdownItem.name}
                    </Link>
                  </li>
                ))}
            </ul>
          )}
        </div>

        {/* Main Navigation Links for Large Screens */}
        <div className="hidden lg:flex items-center gap-4">
          {navItems.map((item, index) => (
            <div className="relative" key={index}>
              <Link
                to={item.link}
                className="hover:text-blue-800 flex items-center"
                onClick={() => {
                  if (item.dropdown) {
                    handleDropdownToggle(index);
                  } else {
                    closeDropdown();
                  }
                }}
              >
                {item.title}
                {item.dropdown && (
                  <RiArrowDropDownLine className="ml-1 text-2xl" />
                )}
              </Link>
              {/* Dropdown for each nav item */}
              {item.dropdown && dropdownOpen === index && (
                <ul className="absolute mt-2 rounded-md shadow-lg w-48 bg-white">
                  {item.dropdownItems.map((dropdownItem, idx) => (
                    <li key={idx} className="shadow-sm">
                      <Link
                        to={dropdownItem.link}
                        className="block px-4 py-2"
                        onClick={closeDropdown}
                      >
                        {dropdownItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-3xl font-extrabold text-blue-800 my-auto py-3"
          >
            {isOpen ? <MdClose /> : <MdMenu />}
          </button>
        </div>

        {/* Helpline */}
        <div className="hidden lg:flex gap-1 items-center">
          <img src={headphoneIcon} alt="" className="w-6 h-6" />
          <div className="flex flex-col">
            <p className="text-xl text-blue-800 font-bold">1900 - 888</p>
            <p className="text-xs">24/7 Support Center</p>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden min-w-40">
          {navItems.map((item, index) => (
            <div key={index} className="relative">
              <Link
                to={item.link}
                className=" text-md py-2 shadow-sm flex justify-between items-center"
                onClick={() => {
                  if (!item.dropdown) closeDropdown();
                }}
              >
                {item.title}
                {item.dropdown}
              </Link>
              {/* Mobile dropdown */}
              {item.dropdown && dropdownOpen === index && (
                <ul
                  className="absolute z-50 bg-white rounded-md shadow-lg w-44"
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: "0",
                    zIndex: "50",
                    backgroundColor: "white",
                    borderRadius: "0.5rem",
                    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {item.dropdownItems.map((dropdownItem, idx) => (
                    <li key={idx}>
                      <Link
                        to={dropdownItem.link}
                        className="block px-4 py-2"
                        onClick={closeDropdown}
                      >
                        {dropdownItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BottomNavbar;
