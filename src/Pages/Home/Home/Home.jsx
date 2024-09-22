import BottomBanner from "../../Shared/BottomBanner/BottomBanner";
import Banner from "../Banner/Banner";
import CategoryCarousel from "../CategoryCarousel/CategoryCarousel";
import PopularProducts from "../PopularProducts/PopularProducts";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Banner />
      <CategoryCarousel />
      <PopularProducts />
      <BottomBanner />
    </div>
  );
};

export default Home;
