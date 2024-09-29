import SpotlightCard from "../../../Components/SpotlightCard/SpotlightCard";

const ProductSpotlight = () => {
  const products = [
    {
      title: "Nestle Original Coffee-Mate Coffee Creamer",
      image: "https://i.ibb.co/pKT3fN7/Article-Figure-Link-thumbnail-1-jpg.png",
      rating: 4.0,
      price: 32.85,
      discount_price: 33.8,
      section: "TopSelling",
    },
    {
      title: "Organic Cage-Free Grade A Large Brown Eggs",
      image: "https://i.ibb.co/ZVSN5T8/Article-Figure-Link-thumbnail-2-jpg.png",
      rating: 4.5,
      price: 5.99,
      discount_price: 6.49,
      section: "TopSelling",
    },
    {
      title: "Seeds of Change Organic Quinoa, Brown & Red Rice",
      image: "https://i.ibb.co/fCFrLzF/Article-Figure-Link-thumbnail-3-jpg.png",
      rating: 4.3,
      price: 8.99,
      discount_price: 9.5,
      section: "TopSelling",
    },
    {
      title: "Naturally Flavored Cinnamon Vanilla Light Roast Coffee",
      image: "https://i.ibb.co/SJwkznQ/Article-Figure-Link-thumbnail-6-jpg.png",
      rating: 4.7,
      price: 12.99,
      discount_price: 14.99,
      section: "TrendingProducts",
    },
    {
      title: "Nestle Original Coffee-Mate Coffee Creamer",
      image: "https://i.ibb.co/WF7t8bc/Article-Figure-Link-thumbnail-5-jpg.png",
      rating: 4.6,
      price: 32.85,
      discount_price: 33.8,
      section: "TrendingProducts",
    },
    {
      title: "Organic Cage-Free Grade A Large Brown Eggs",
      image: "https://i.ibb.co/SJwkznQ/Article-Figure-Link-thumbnail-6-jpg.png",
      rating: 4.5,
      price: 5.99,
      discount_price: 6.49,
      section: "TrendingProducts",
    },
    {
      title: "Seeds of Change Organic Quinoa, Brown & Red Rice",
      image: "https://i.ibb.co/h2mb3Kv/Article-Figure-Link-thumbnail-7-jpg.png",
      rating: 4.2,
      price: 8.99,
      discount_price: 9.99,
      section: "RecentlyAdded",
    },
    {
      title: "Naturally Flavored Cinnamon Vanilla Light Roast Coffee",
      image: "https://i.ibb.co/mhVjpk8/Article-Figure-Link-thumbnail-8-jpg.png",
      rating: 4.3,
      price: 12.99,
      discount_price: 14.99,
      section: "RecentlyAdded",
    },
    {
      title: "Nestle Original Coffee-Mate Coffee Creamer",
      image: "https://i.ibb.co/mzmYLx5/Article-Figure-Link-thumbnail-9-jpg.png",
      rating: 4.8,
      price: 32.85,
      discount_price: 33.8,
      section: "RecentlyAdded",
    },
    {
      title: "Seeds of Change Organic Quinoa, Brown & Red Rice",
      image:
        "https://i.ibb.co/4sQJM80/Article-Figure-Link-thumbnail-10-jpg.png",
      rating: 4.9,
      price: 8.99,
      discount_price: 9.5,
      section: "TopRated",
    },
    {
      title: "Naturally Flavored Cinnamon Vanilla Light Roast Coffee",
      image:
        "https://i.ibb.co/gVjrbsq/Article-Figure-Link-thumbnail-11-jpg.png",
      rating: 4.7,
      price: 12.99,
      discount_price: 14.99,
      section: "TopRated",
    },
    {
      title: "Seeds of Change Organic Quinoa, Brown & Red Rice",
      image:
        "https://i.ibb.co/ph7m9Z3/Article-Figure-Link-thumbnail-12-jpg.png",
      rating: 4.6,
      price: 8.99,
      discount_price: 9.99,
      section: "TopRated",
    },
  ];

  const sections = [
    "TopSelling",
    "TrendingProducts",
    "RecentlyAdded",
    "TopRated",
  ];
  const sectionNames = [
    "Top Selling",
    "Trending Products",
    "Recently Added",
    "Top Rated",
  ];

  return (
    <div className="my-6 space-y-10">
      <div className="flex overflow-x-auto gap-3 lg:grid lg:grid-cols-4 lg:overflow-x-visible">
        {sections.map((section, index) => (
          <div key={index} className="min-w-[250px] lg:min-w-0">
            <h3 className="text-xl font-bold mb-4">{sectionNames[index]}</h3>

            {/* progress bar */}
            <div className="w-full bg-blue-800/10 rounded-full h-1 mb-10">
              <div
                className="bg-blue-800/20 h-1 rounded-full"
                style={{ width: "20%" }}
              ></div>
            </div>

            <div className="flex flex-col gap-2">
              {products
                .filter((product) => product.section === section)
                .slice(0, 3)
                .map((product, idx) => (
                  <SpotlightCard
                    key={idx}
                    title={product.title}
                    image={product.image}
                    rating={product.rating}
                    price={product.price}
                    discount_price={product.discount_price}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSpotlight;
