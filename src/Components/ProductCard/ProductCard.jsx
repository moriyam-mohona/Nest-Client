import { AiFillStar } from "react-icons/ai";
import { MdOutlineShoppingCart } from "react-icons/md";

const ProductCard = ({
  image,
  title,
  category,
  rating,
  company,
  price,
  discount_price,
}) => {
  return (
    <div className="flex flex-col justify-between border rounded-3xl p-2 md:p-3 lg:p-5 shadow-md space-y-1">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-contain rounded-t-3xl md:mb-2 lg:mb-4"
      />

      <h4 className="text-sm">{category}</h4>
      <h6 className="text-sm md:text-base font-bold">{title}</h6>
      <div className="flex items-center mb-2">
        <AiFillStar className="text-yellow-500" />
        <span className="ml-3">({rating})</span>
      </div>
      <h6 className="text-sm">
        By <span className="text-green-800 font-semibold">{company}</span>
      </h6>
      <div className="flex justify-between">
        <div className="flex items-center gap-3">
          <h4 className="text-md font-semibold text-green-800">${price}</h4>
          {discount_price && (
            <h6 className="text-sm line-through">${discount_price}</h6>
          )}
        </div>
        <button className="flex items-center text-green-800 font-medium bg-green-800/5 px-3 py-1 rounded-md">
          <MdOutlineShoppingCart />
          Add
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
