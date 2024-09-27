import { useState } from "react";
import products from "../../../assets/Products.json";
import ProductCard from "../../../Components/ProductCard/ProductCard";
const PopularProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

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
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Popular Products</h2>
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
      {/* Product Cards  */}
      <div className="grid grid-cols-3 lg:grid-cols-5 gap-3">
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
