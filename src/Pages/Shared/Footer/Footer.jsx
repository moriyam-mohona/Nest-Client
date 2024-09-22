import logo from "../../../assets/Logo.png";
import paymentMethod from "../../../assets/payment-method.png.png";
import appStore from "../../../assets/appStore.png";
import googlePlay from "../../../assets/googlePlay.png";

import { FaInstagram, FaPinterestP, FaYoutube } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { LuPhoneCall, LuSend } from "react-icons/lu";
import { RiFacebookFill } from "react-icons/ri";
import { GrLocation } from "react-icons/gr";
import { SlEarphonesAlt } from "react-icons/sl";
import { BiTimer } from "react-icons/bi";
const Footer = () => {
  return (
    <div className="px-10">
      <div className="grid grid-cols-4 gap-10 py-10">
        <aside className="col-span-1">
          <img src={logo} alt="" className="w-36 mb-2" />
          <p className="mb-2 text-sm">
            Awesome grocery store website <br /> template
          </p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1">
              <GrLocation className="text-blue-700 text-3xl" />
              <p className="text-xs">
                <span className="font-semibold"> Address : </span>5171 W
                Campbell Ave undefined Kent, Utah 53127 United States
              </p>
            </div>
            <div className="flex items-center gap-1">
              <SlEarphonesAlt className="text-blue-700" />
              <p className="text-xs">
                <span className="font-semibold">Call Us : </span>(+91) -
                540-025-124553
              </p>
            </div>
            <div className="flex items-center gap-1">
              <LuSend className="text-blue-700" />
              <p className="text-xs">
                <span className="font-semibold"> Email : </span>sale@Nest.com
              </p>
            </div>
            <div className="flex items-center gap-1">
              <BiTimer className="text-blue-700" />
              <p className="text-xs">
                <span className="font-semibold">Hours : </span>10:00 - 18:00,
                Mon - Sat
              </p>
            </div>
          </div>
        </aside>
        <div className="col-span-2 grid grid-cols-4 gap-3">
          <nav className="col-span-1 flex flex-col gap-2">
            <h6 className="font-bold text-lg mb-3">Company</h6>
            <a className="link link-hover text-xs mb-1">Delivery Information</a>
            <a className="link link-hover text-xs mb-1">Privacy Policy</a>
            <a className="link link-hover text-xs mb-1">Terms & Conditions</a>
            <a className="link link-hover text-xs mb-1">Contact Us</a>
            <a className="link link-hover text-xs mb-1">Support Center</a>
            <a className="link link-hover text-xs mb-1">Careers</a>
          </nav>
          <nav className="col-span-1 flex flex-col gap-2">
            <h6 className="font-bold text-lg mb-3">Account</h6>
            <a className="link link-hover text-xs mb-1">Sign In</a>
            <a className="link link-hover text-xs mb-1">View Cart</a>
            <a className="link link-hover text-xs mb-1">My Wishlist</a>
            <a className="link link-hover text-xs mb-1">Track My Order</a>
            <a className="link link-hover text-xs mb-1">Help Ticket</a>
            <a className="link link-hover text-xs mb-1">Shipping Details</a>
            <a className="link link-hover text-xs mb-1">Compare products</a>
          </nav>
          <nav className="col-span-1 flex flex-col gap-2">
            <h6 className="font-bold text-lg mb-3">Corporate</h6>
            <a className="link link-hover text-xs mb-1">Become a Vendor</a>
            <a className="link link-hover text-xs mb-1">Affiliate Program</a>
            <a className="link link-hover text-xs mb-1">Farm Business</a>
            <a className="link link-hover text-xs mb-1">Farm Careers</a>
            <a className="link link-hover text-xs mb-1">Our Suppliers</a>
            <a className="link link-hover text-xs mb-1">Accessibility</a>
            <a className="link link-hover text-xs mb-1">Promotions</a>
          </nav>
          <nav className="col-span-1 flex flex-col gap-2">
            <h6 className="font-bold text-lg mb-3">Popular</h6>
            <a className="link link-hover text-xs mb-1">
              Milk & Flavoured Milk
            </a>
            <a className="link link-hover text-xs mb-1">Butter and Margarine</a>
            <a className="link link-hover text-xs mb-1">Eggs Substitutes</a>
            <a className="link link-hover text-xs mb-1">Marmalades</a>
            <a className="link link-hover text-xs mb-1">Sour Cream and Dips</a>
            <a className="link link-hover text-xs mb-1">Tea & Kombucha</a>
            <a className="link link-hover text-xs mb-1">Cheese</a>
          </nav>
        </div>
        <aside className="col-span-1">
          <h6 className="font-bold text-lg mb-3">Install App</h6>
          <div className="mb-10">
            <p className="text-xs mb-6">From App Store or Google Play</p>
            <div className="flex gap-3">
              <img src={appStore} alt="" className="h-8" />
              <img src={googlePlay} alt="" className="h-8" />
            </div>
          </div>
          <div className="mb-3">
            <p className="text-xs mb-6">Secured Payment Gateways</p>
            <img src={paymentMethod} alt="" className="w-44" />
          </div>
        </aside>
      </div>
      <hr />
      <div className="flex justify-between items-center py-4">
        <div>
          <p className="text-xs">
            © 2022, Nest - HTML E-commerce Template <br /> All rights reserved
          </p>
          <p></p>
        </div>
        <div className="flex gap-10">
          <div className="flex gap-4 items-center">
            <LuPhoneCall className="w-6 h-6" />
            <div className="flex flex-col gap-0">
              <p className="text-2xl text-blue-700 font-semibold">
                1900 - 6666
              </p>
              <p className="text-xs">Working 8:00 - 22:00</p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <LuPhoneCall className="w-6 h-6" />
            <div className="flex flex-col">
              <p className="text-2xl text-blue-700 font-semibold">1900 - 888</p>
              <p className="text-xs">24/7 Support Center</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <div className="flex gap-4 items-center">
            <p className="text-md font-semibold">Follow Us</p>
            <div className="flex gap-1">
              <RiFacebookFill className="bg-blue-700 text-2xl text-white rounded-full p-1" />
              <IoLogoTwitter className="bg-blue-700 text-2xl text-white rounded-full p-1" />
              <FaInstagram className="bg-blue-700 text-2xl text-white rounded-full p-1" />
              <FaPinterestP className="bg-blue-700 text-2xl text-white rounded-full p-1" />
              <FaYoutube className="bg-blue-700 text-2xl text-white rounded-full p-1" />
            </div>
          </div>
          <p className="text-xs">Up to 15% discount on your first subscribe</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
