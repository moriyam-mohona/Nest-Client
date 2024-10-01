import { FaArrowRight } from "react-icons/fa";

const PromotionBanner = () => {
  const promotions = [
    {
      text: "Everyday Fresh & Clean with Our Products",
      image: "https://i.ibb.co.com/2yMYM7Z/banner-1-png.png",
    },
    {
      text: "Make your Breakfast Healthy and Easy",
      image: "https://i.ibb.co.com/jLQ5Z5z/banner-2-png.png",
    },
    {
      text: "The best Organic Products Online",
      image: "https://i.ibb.co.com/jvrmgtw/banner-3-png.png",
    },
  ];
  return (
    <div className="my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {promotions.map((promotion, index) => (
        <div key={index} className="relative">
          <img src={promotion.image} alt="" className="w-full h-auto" />
          <div className="absolute left-7 right-10 top-10 md:left-7 md:right-10 md:top-10 lg:left-10 lg:right-40 lg:top-10">
            <h3 className="text-lg font-bold">{promotion.text}</h3>
          </div>

          <div className="absolute bottom-20 md:bottom-16 lg:bottom-24 left-6 md:left-6 lg:left-10">
            <button className="bg-green-800 text-white text-xs flex items-center gap-2 px-4 py-2 rounded-md">
              Shop Now <FaArrowRight className="text-sm" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PromotionBanner;
