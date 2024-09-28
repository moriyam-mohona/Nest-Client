import { AiFillStar } from "react-icons/ai";

const SpotlightCard = ({ title, image, rating, price, discount_price }) => {
  return (
    <div className="flex gap-1 h-32">
      <img src={image} alt="" className="w-24 h-24" />
      <div className="flex flex-col">
        <h6 className="text-sm font-bold">{title}</h6>
        <div className="flex items-center">
          <AiFillStar className="text-yellow-500" />
          <span className="ml-3 text-sm">({rating})</span>
        </div>
        <div className="flex items-center gap-3">
          <h4 className="text-sm font-semibold text-blue-800">${price}</h4>
          {discount_price && (
            <h6 className="text-xs line-through">${discount_price}</h6>
          )}
        </div>
      </div>
    </div>
  );
};

export default SpotlightCard;
