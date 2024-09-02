import { FiSend } from "react-icons/fi";
import banner1 from "../../../assets/Banner-1.png";
import banner2 from "../../../assets/Banner-2.png";
const Banner = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    console.log("Email from Banner: ", email);

    form.reset();
  };
  return (
    <div className="carousel w-full rounded-3xl">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={banner1} className="w-full" />
        <div className="absolute inset-0 flex flex-col items-start justify-center gap-4 text-left pl-24">
          <h2 className="text-6xl font-bold w-1/2">
            Fresh Vegetables Big Discount
          </h2>
          <p className="text-lg">Save up to 50% off on your first order</p>
          <form onSubmit={handleSubmit} className="relative flex items-center">
            <div className="relative ">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4">
                <FiSend className="text-sm" />
              </span>
              <input
                name="email"
                type="email"
                placeholder="Your email address"
                className="p-2 pl-10 rounded-full w-80"
              />
            </div>
            <button
              type="submit"
              className="absolute right-0 bg-blue-700 text-white text-xs px-5 py-3 rounded-full"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={banner2} className="w-full" />
        <div className="absolute inset-0 flex flex-col items-start justify-center gap-4 text-left pl-24">
          <h2 className="text-6xl font-bold w-1/2">
            Fresh Vegetables Big Discount
          </h2>
          <p className="text-lg">Save up to 50% off on your first order</p>
          <div className="relative flex items-center">
            <div className="relative ">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4">
                <FiSend className="text-sm" />
              </span>
              <input
                type="email"
                placeholder="Your email address"
                className="p-2 pl-10 rounded-full w-80"
              />
            </div>
            <button className="absolute right-0 bg-blue-500 text-white text-xs px-5 py-3 rounded-full">
              Subscribe
            </button>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
