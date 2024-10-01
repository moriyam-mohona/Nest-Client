import { AiFillStar } from "react-icons/ai";

const SpotlightCard = ({ title, image, rating, price, discount_price }) => {
  return (
    <div className="flex gap-1 items-center h-32">
      <img
        src={image}
        alt={title}
        className="w-24 h-24 object-cover rounded-md"
      />
      <div className="flex flex-col justify-between">
        <h6 className="text-sm font-bold">{title}</h6>
        <div className="flex items-center gap-1">
          <AiFillStar className="text-yellow-500" />
          <span className="text-sm">({rating})</span>
        </div>
        <div className="flex items-center gap-2">
          <h4 className="text-sm font-semibold text-green-800">${price}</h4>
          {discount_price && (
            <h6 className="text-xs line-through text-green-800">
              ${discount_price}
            </h6>
          )}
        </div>
      </div>
    </div>
  );
};

export default SpotlightCard;
