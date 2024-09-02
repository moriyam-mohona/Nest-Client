import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import item1 from "../../../assets/1.png";
import item2 from "../../../assets/2.png";
import item3 from "../../../assets/3.png";
import item4 from "../../../assets/4.png";
import item5 from "../../../assets/5.png";
import item6 from "../../../assets/6.png";
import item7 from "../../../assets/7.png";
import item8 from "../../../assets/8.png";
import item9 from "../../../assets/9.png";
import item10 from "../../../assets/10.png";

const categories = [
  { name: "Cake & Milk", items: 26, image: item1 },
  { name: "Organic Kiwi", items: 28, image: item2 },
  { name: "Peach", items: 14, image: item3 },
  { name: "Red Apple", items: 54, image: item4 },
  { name: "Snack", items: 56, image: item5 },
  { name: "Vegetables", items: 72, image: item6 },
  { name: "Strawberry", items: 36, image: item7 },
  { name: "Black Plum", items: 123, image: item8 },
  { name: "Custard Apple", items: 34, image: item9 },
  { name: "Coffee & Tea", items: 89, image: item10 },
];

const CategoryCarousel = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      left: -200,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      left: 200,
      behavior: "smooth",
    });
  };
  return (
    <div className="relative my-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Featured Categories</h2>
        <div className="flex space-x-2">
          <button
            onClick={scrollLeft}
            className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full shadow-lg"
          >
            <FaArrowLeft size={14} />
          </button>
          <button
            onClick={scrollRight}
            className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full shadow-lg"
          >
            <FaArrowRight size={14} />
          </button>
        </div>
      </div>
      <div
        ref={scrollContainerRef}
        className="flex space-x-3 overflow-x-scroll scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-28 px-1 py-5 rounded-lg bg-gray-100 text-center"
          >
            <img
              src={category.image}
              alt={category.name}
              className="mx-auto h-14"
            />
            <h3 className="text-sm font-semibold">{category.name}</h3>
            <p className="text-xs text-gray-500">{category.items} items</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryCarousel;
