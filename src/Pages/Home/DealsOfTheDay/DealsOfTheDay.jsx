import { AiFillStar } from "react-icons/ai";
import { MdChevronRight, MdOutlineShoppingCart } from "react-icons/md";

const products = [
  {
    title: "Seeds of Change Organic Quinoa",
    category: "Milks & Dairies",
    company: "Seeds of Change",
    image: "https://i.ibb.co.com/HqcGDwL/banner-8-png.png",
    price: 4.99,
    discount_price: 3.99,
    rating: 4.5,
    label: "Hot",
  },
  {
    title: "All Natural Italian-Style Chicken Meatballs",
    category: "Coffees & Teas",
    company: "Stouffer's",
    image: "https://i.ibb.co.com/r6MmVsS/banner-7-png.png",
    price: 8.99,
    discount_price: 7.99,
    rating: 4.7,
    label: "Best Sale",
  },
  {
    title: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
    category: "Coffees & Teas",
    company: "Angie's",
    image: "https://i.ibb.co.com/jGknkKP/banner-6-png.png",
    price: 3.49,
    discount_price: 2.99,
    rating: 4.8,
    label: "New",
  },
  {
    title: "Silk Almond Milk",
    category: "Milks & Dairies",
    company: "Silk",
    image: "https://i.ibb.co.com/tLfgYkK/banner-5-png.png",
    price: 2.99,
    discount_price: 2.49,
    rating: 4.6,
    label: "Hot",
  },
];
const DealsOfTheDay = () => {
  return (
    // <div className="my-4 relative mb-36">
    //   {/* Header */}
    //   <div className="flex justify-between items-center mb-4">
    //     <h2 className="text-2xl font-bold">Deals Of The Day</h2>
    //     <h3 className="font-bold text-blue-800 cursor-pointer flex items-center">
    //       All Deals <MdChevronRight />
    //     </h3>
    //   </div>

    //   {/* Product Cards */}
    //   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
    //     {products.slice(0, 4).map((product, index) => (
    //       <div key={index} className="relative rounded-lg">
    //         <img
    //           className=" w-full object-cover rounded-lg"
    //           src={product.image}
    //           alt={product.title}
    //         />
    //         <div className="absolute inset-x-0 z-10 top-40 flex flex-col justify-between bg-white shadow-lg p-4 rounded-lg mx-3 mb-4 min-h-48">
    //           <h4 className="text-sm">{product.category}</h4>
    //           <h6 className="text-md font-bold">{product.title}</h6>
    //           <div className="flex items-center mb-2">
    //             <AiFillStar className="text-yellow-500" />
    //             <span className="ml-2 text-sm">({product.rating})</span>
    //           </div>
    //           <h6 className="text-sm">
    //             By{" "}
    //             <span className="text-blue-800 font-semibold">
    //               {product.company}
    //             </span>
    //           </h6>
    //           <div className="flex justify-between items-center mt-2">
    //             <div className="flex items-center gap-3">
    //               <h4 className="text-md font-semibold text-blue-800">
    //                 ${product.price}
    //               </h4>
    //               {product.discount_price && (
    //                 <h6 className="text-sm line-through">
    //                   ${product.discount_price}
    //                 </h6>
    //               )}
    //             </div>
    //             <button className="flex items-center text-blue-800 font-medium bg-blue-800/5 px-3 py-1 rounded-md">
    //               <MdOutlineShoppingCart />
    //               Add
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>

    <div className="my-4 relative mb-36">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Deals Of The Day</h2>
        <h3 className="font-bold text-blue-800 cursor-pointer flex items-center">
          All Deals <MdChevronRight />
        </h3>
      </div>

      {/* Product Cards */}
      <div className="flex gap-4 overflow-x-auto lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-x-visible">
        {products.map((product, index) => (
          <div
            key={index}
            className="min-w-[250px] lg:min-w-0 relative rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
          >
            <img
              className="w-full object-cover rounded-lg"
              src={product.image}
              alt={product.title}
            />
            <div className="absolute inset-x-0 top-28 z-10 bg-white shadow-md p-4 rounded-lg mx-3 mb-4 transform translate-y-8 hover:translate-y-0 transition duration-300 ease-in-out">
              <h4 className="text-sm">{product.category}</h4>
              <h6 className="text-md font-bold mb-2">{product.title}</h6>

              <div className="flex items-center mb-2">
                <AiFillStar className="text-yellow-500" />
                <span className="ml-2 text-sm">({product.rating})</span>
              </div>

              <h6 className="text-sm mb-2">
                By{" "}
                <span className="text-blue-800 font-semibold">
                  {product.company}
                </span>
              </h6>

              <div className="flex justify-between items-center mt-3">
                <div className="flex items-center gap-2">
                  <h4 className="text-md font-semibold text-blue-800">
                    ${product.price}
                  </h4>
                  {product.discount_price && (
                    <h6 className="text-sm line-through text-gray-500">
                      ${product.discount_price}
                    </h6>
                  )}
                </div>
                <button className="flex items-center text-blue-800 font-medium bg-blue-800/5 px-3 py-1 rounded-md hover:bg-blue-800/10 transition">
                  <MdOutlineShoppingCart className="mr-1" />
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealsOfTheDay;
