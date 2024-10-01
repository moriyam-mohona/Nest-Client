import { Link } from "react-router-dom";

const WhatWeProvide = () => {
  const promotions = [
    {
      title: "Best prices & offers",
      promotionText: "Orders $50 or more",
      details:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
      image: "https://i.ibb.co.com/pK7YzM6/icon-1-svg-fill.png",
    },
    {
      title: "Free delivery",
      promotionText: "24/7 amazing services",
      details:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
      image: "https://i.ibb.co.com/JQZcGXG/icon-2-svg.png",
    },
    {
      title: "Great daily deal",
      promotionText: "When you sign up",
      details:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
      image: "https://i.ibb.co.com/S0VR37S/icon-4-svg-fill.png",
    },
    {
      title: "Wide assortment",
      promotionText: "Mega Discounts",
      details:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
      image: "https://i.ibb.co.com/Ptx1NTw/icon-5-svg-fill.png",
    },
    {
      title: "Easy returns",
      promotionText: "Within 30 days",
      details:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
      image: "https://i.ibb.co.com/TrV2F0W/Group.png",
    },
    {
      title: "Easy returns",
      promotionText: "Within 30 days",
      details:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
      image: "https://i.ibb.co.com/TrV2F0W/Group.png",
    },
  ];
  return (
    <div className="my-4 md:mx-10 lg:mx-20 mb-10">
      {/* Header  */}
      <div className="flex flex-col items-center mb-6">
        <h2 className="text-2xl font-bold">What We Provide?</h2>
        <svg width="100%" height="22px" viewBox="0 0 100 20">
          <path
            d="M0 14 Q 10 0 20 10 T 40 10 T 60 10 T 80 10 T 100 10"
            fill="none"
            stroke="#22543D"
            strokeWidth="3"
          />
        </svg>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-10 place-items-center">
        {promotions.map((promotion, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-1 border border-green-800/10 w-full  px-2 py-2 md:px-3 md:py-5 lg:px-6 lg:py-10 rounded-md"
          >
            <img src={promotion.image} alt="" className="h-10 lg:h-16" />
            <p className="font-bold">{promotion.title}</p>
            <p className="text-center text-sm">{promotion.details}</p>
            <Link className="text-sm hover:text-green-800 font-semibold">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeProvide;
