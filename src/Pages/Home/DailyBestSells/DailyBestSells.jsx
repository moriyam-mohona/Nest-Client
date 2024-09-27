import { useState } from "react";
import products from "../../../assets/Products.json";
import { AiFillStar } from "react-icons/ai";
import image from "../../../assets/DailySell.png";
import { FaArrowRight } from "react-icons/fa";

const DailyBestSells = () => {
  const [selectedCategory, setSelectedCategory] = useState("Featured");

  const categories = ["Featured", "Popular", "New added"];
  //   const filteredProducts =
  //     selectedCategory === "All"
  //       ? products
  //       : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="my-4 relative mb-32">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Daily Best Sells</h2>
        <div className="flex gap-4">
          {categories.map((category, index) => (
            <h3
              key={index}
              className={`text-sm cursor-pointer ${
                selectedCategory === category ? "text-blue-800 font-bold" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </h3>
          ))}
        </div>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        <div className="relative">
          <img
            src={image}
            className="w-full  h-full object-center rounded-3xl"
          />
          <div className="absolute left-10 right-5 top-10">
            <h3 className="text-3xl font-bold mb-8">
              Bring nature into your home
            </h3>
            <button className="bg-blue-800 text-white text-sm flex items-center gap-2 px-4 py-2 rounded-md">
              Shop Now <FaArrowRight className="text-sm" />
            </button>
          </div>
        </div>{" "}
        {products.slice(0, 4).map((product, index) => (
          <div
            key={index}
            className="flex flex-col justify-between border rounded-3xl p-5 shadow-md space-y-1"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-40 object-contain rounded-t-3xl mb-4"
            />

            <h4 className="text-sm">{product.category}</h4>
            <h6 className="text-md font-bold">{product.title}</h6>
            <div className="flex items-center mb-2">
              <AiFillStar className="text-yellow-500" />
              <span className="ml-3">({product.rating})</span>
            </div>
            <div className="flex items-center gap-3">
              <h4 className="text-md font-semibold text-blue-800">
                ${product.price}
              </h4>
              {product.discount_price && (
                <h6 className="text-sm line-through ">
                  ${product.discount_price}
                </h6>
              )}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div
                className="bg-blue-800 h-1 rounded-full"
                style={{ width: "50%" }}
              ></div>
            </div>
            <h6 className="text-sm">Sold: 90/120</h6>

            <button className="flex items-center justify-center w-full text-white text-sm text-center font-medium bg-blue-800 py-2 rounded-md">
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyBestSells;
