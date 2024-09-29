import { useState } from "react";
import products from "../../../assets/Products.json";
import ProductCard from "../../../Components/ProductCard/ProductCard";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";

const PopularProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const categories = [
    "All",
    "Milks & Dairies",
    "Coffees & Teas",
    "Pet Foods",
    "Meats",
    "Vegetables",
    "Fruits",
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="relative my-4">
      {/* Header  */}
      <div className="flex flex-row md:flex-col gap-2 lg:flex-row justify-between items-center md:items-start lg:items-center mb-4">
        <h2 className="text-2xl font-bold">Popular Products</h2>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="p-2">
            {menuOpen ? (
              <AiOutlineClose className="text-sm" />
            ) : (
              <FaBars className="text-sm" />
            )}
          </button>
        </div>

        <div className="hidden md:flex gap-4">
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

      {menuOpen && (
        <div className="absolute top-12 left-0 w-full bg-white shadow-md z-50 md:hidden">
          <div className="flex flex-col p-4">
            {categories.map((category, index) => (
              <h3
                key={index}
                className={`text-sm cursor-pointer mb-2 ${
                  selectedCategory === category ? "text-blue-800 font-bold" : ""
                }`}
                onClick={() => {
                  setSelectedCategory(category);
                  setMenuOpen(false);
                }}
              >
                {category}
              </h3>
            ))}
          </div>
        </div>
      )}

      {/* Product Cards  */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {filteredProducts.slice(0, 10).map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            category={product.category}
            title={product.title}
            rating={product.rating}
            company={product.company}
            price={product.price}
            discount_price={product.discount_price}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
