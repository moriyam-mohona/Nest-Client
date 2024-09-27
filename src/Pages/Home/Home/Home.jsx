import BottomBanner from "../../Shared/BottomBanner/BottomBanner";
import Banner from "../Banner/Banner";
import CategoryCarousel from "../CategoryCarousel/CategoryCarousel";
import DailyBestSells from "../DailyBestSells/DailyBestSells";
import DealsOfTheDay from "../DealsOfTheDay/DealsOfTheDay";
import PopularProducts from "../PopularProducts/PopularProducts";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Banner />
      <CategoryCarousel />
      <PopularProducts />
      <DealsOfTheDay />
      <DailyBestSells />
      <BottomBanner />
    </div>
  );
};

export default Home;
