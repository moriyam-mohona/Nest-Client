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
        <img src={banner1} className="w-full min-h-60" />
        <div className="absolute inset-0 flex flex-col items-start justify-center gap-3 md:gap-3 lg:gap-4 text-left p-10 md:p-20 lg:p-24">
          <h2 className="text-xl md:text-3xl lg:text-5xl font-bold w-3/4 lg:w-1/2">
            Fresh Vegetables Big Discount
          </h2>
          <p className="text-sm md:text-base lg:text-lg">
            Save up to 50% off on your first order
          </p>
          <form onSubmit={handleSubmit} className="relative flex items-center">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4">
                <FiSend className="text-sm" />
              </span>
              <input
                name="email"
                type="email"
                placeholder="Your email address"
                className="p-2 pl-10 rounded-full w-80 text-sm md:text-base"
              />
            </div>
            <button
              type="submit"
              className="absolute right-0 bg-green-800 text-white text-xs px-5 py-2 md:py-3 rounded-full"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div className="absolute left-1 right-1 md:left-4 md:right-4 lg:left-5 lg:right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-sm lg:btn-md btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-sm lg:btn-md btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={banner2} className="w-full min-h-60" />
        <div className="absolute inset-0 flex flex-col items-start justify-center gap-3 md:gap-3 lg:gap-4 text-left p-10 md:p-20 lg:p-24">
          <h2 className="text-xl md:text-3xl lg:text-5xl font-bold w-3/4 lg:w-1/2">
            Fresh Vegetables Big Discount
          </h2>
          <p className="text-sm md:text-base lg:text-lg">
            Save up to 50% off on your first order
          </p>
          <form onSubmit={handleSubmit} className="relative flex items-center">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4">
                <FiSend className="text-sm" />
              </span>
              <input
                name="email"
                type="email"
                placeholder="Your email address"
                className="p-2 pl-10 rounded-full w-80 text-sm md:text-base"
              />
            </div>
            <button
              type="submit"
              className="absolute right-0 bg-green-800 text-white text-xs px-5 py-2 md:py-3 rounded-full"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div className="absolute left-1 right-1 md:left-4 md:right-4 lg:left-5 lg:right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-sm lg:btn-md btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-sm lg:btn-md btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
