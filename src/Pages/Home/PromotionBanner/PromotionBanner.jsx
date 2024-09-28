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
    <div className="my-4 flex gap-3">
      {promotions.map((promotion, index) => (
        <div key={index} className="relative">
          <img src={promotion.image} alt="" className="w-full h-auto" />
          <div className="absolute left-10 right-40 top-10">
            <h3 className="text-lg font-bold">{promotion.text}</h3>
          </div>
          {/* Position the button at the bottom of each banner */}
          <div className="absolute bottom-12 left-10">
            <button className="bg-blue-800 text-white text-xs flex items-center gap-2 px-4 py-2 rounded-md">
              Shop Now <FaArrowRight className="text-sm" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PromotionBanner;
