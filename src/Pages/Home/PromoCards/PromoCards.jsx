const PromoCards = () => {
  const promotions = [
    {
      title: "Best prices & offers",
      details: "Orders $50 or more",
      image: "https://i.ibb.co.com/pK7YzM6/icon-1-svg-fill.png",
    },
    {
      title: "Free delivery",
      details: "24/7 amazing services",
      image: "https://i.ibb.co.com/JQZcGXG/icon-2-svg.png",
    },
    {
      title: "Great daily deal",
      details: "When you sign up",
      image: "https://i.ibb.co.com/S0VR37S/icon-4-svg-fill.png",
    },
    {
      title: "Wide assortment",
      details: "Mega Discounts",
      image: "https://i.ibb.co.com/Ptx1NTw/icon-5-svg-fill.png",
    },
    {
      title: "Easy returns",
      details: "Within 30 days",
      image: "https://i.ibb.co.com/TrV2F0W/Group.png",
    },
  ];
  // const promotions = [
  //   {
  //     title: "Best prices & offers",
  //     details: "Orders $50 or more",
  //     image: "https://i.ibb.co.com/JQWDfbJ/icon-1-svg-fill.png",
  //   },
  //   {
  //     title: "Free delivery",
  //     details: "24/7 amazing services",
  //     image: "https://i.ibb.co.com/h95smWB/icon-2-svg-fill.png",
  //   },
  //   {
  //     title: "Great daily deal",
  //     details: "When you sign up",
  //     image: "https://i.ibb.co.com/5ck3YBc/icon-3-svg-fill.png",
  //   },
  //   {
  //     title: "Wide assortment",
  //     details: "Mega Discounts",
  //     image: "https://i.ibb.co.com/XfQDXfy/icon-4-svg.png",
  //   },
  //   {
  //     title: "Easy returns",
  //     details: "Within 30 days",
  //     image: " https://i.ibb.co.com/MSkMFtt/icon-5-svg-fill.png",
  //   },
  // ];

  return (
    <div className="my-6 flex gap-3 overflow-x-auto lg:grid lg:grid-cols-5 lg:overflow-x-visible">
      {promotions.map((promotion, index) => (
        <div
          key={index}
          className="bg-green-800/10 shadow-md rounded-lg flex gap-3 items-center py-5 p-3 min-w-[250px] lg:min-w-0"
        >
          <img
            src={promotion.image}
            alt={promotion.title}
            className="w-10 h-10"
          />
          <div>
            <h2 className="text-md font-bold">{promotion.title}</h2>
            <h2 className="text-sm">{promotion.details}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PromoCards;
